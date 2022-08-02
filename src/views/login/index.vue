<template>
  <div>login view</div>
  <el-icon> <i-ep-circle-check-filled /></el-icon>
  <el-icon :size="20">
    <i-ep-Edit />
  </el-icon>
  <el-icon color="#409EFC" class="no-inherit">
    <i-ep-Share />
  </el-icon>
  <el-icon>
    <i-ep-search></i-ep-search>
  </el-icon>
  <el-icon class="is-loading">
    <i-ep-Loading />
  </el-icon>
  <el-button type="primary">
    <el-icon style="vertical-align: middle">
      <i-ep-Search />
    </el-icon>
    <span style="vertical-align: middle"> Search </span>
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
