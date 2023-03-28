<!--
 * @Date         : 2023-02-13 14:53:57 星期1
 * @Author       : xut
 * @Description  : 
-->
<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

let asyncComp = ref(null);
async function onLoadComp() {
  const ret = await import("./components/AsyncComp.vue");
  // @ts-ignore
  asyncComp.value = ret.default;
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>直接使用import异步加载</div>
  <button @click="onLoadComp">点击加载组件</button>
  <component :is="asyncComp"></component>
  <div>使用router异步加载</div>
  <router-link to="/async">异步组件路由</router-link>
  <router-view></router-view>
</template>

<style scoped>
/* App.vue 中的样式 */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
