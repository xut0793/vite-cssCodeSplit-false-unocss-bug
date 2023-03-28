/*
 * @Date         : 2023-02-13 14:53:57 星期1
 * @Author       : xut
 * @Description  :
 */
import { createApp } from "vue";
import "uno.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
