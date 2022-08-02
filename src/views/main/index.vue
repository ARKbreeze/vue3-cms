<template>
  <div>main view</div>
  <p>{{ user }}</p>
  <el-button type="primary" size="default">click</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/store';
export default defineComponent({
  setup() {
    const store = useUserStore();
    const user = store.$state.user;

    return { user };
  }
});
</script>

<style scoped></style>
