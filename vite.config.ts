/*
 * @Date         : 2023-02-13 14:53:57 星期1
 * @Author       : xut
 * @Description  :
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  build: {
    cssCodeSplit: false,
    target: "esnext",
  },
});
