const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

const pathSrc = path.resolve(__dirname, 'src');

module.exports = defineConfig({
  //这种直接合并
  transpileDependencies: true,

  // 名字一样的直接写
  //不一样采用 configureWebpack

  //  1. 只需要合并
  configureWebpack: {
    resolve: {
      alias: {
        '@': pathSrc,
        components: '@/components',
        views: '@/views'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon'
          })
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts')
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ['ep']
          })
        ],
        dts: path.resolve(pathSrc, 'components.d.ts')
      }),
      Icons({
        autoInstall: true
      })
    ]
  }

  // 2. 需要修改覆盖之前的设置
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }

  // 感觉还是有问题,还是写常规的吧
  //3. chainWebpack  链式编程
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  //     .set('views', '@/views');
  // config
  //   .plugin('AutoImport')
  //   .use(AutoImport)
  //   .tap((options) => {
  //     options[0] = {
  //       resolvers: [ElementPlusResolver()]
  //     };
  //     return options;
  //   });
  // config.plugin('Components').use(Components, [
  //   {
  //     resolvers: [ElementPlusResolver()]
  //   }
  // ]) };
});
