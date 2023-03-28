<!--
 * @Date         : 2023-02-13 14:53:57 星期1
 * @Author       : xut
 * @Description  : 练习vim
-->
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="read-the-docs">{{ msg }}</h1>
  <h3 class="bg-red-500">unocss bg-red-500</h3>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
/* HelloWold 中样式 */
.read-the-docs {
  color: #888;
}
</style>
