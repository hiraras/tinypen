import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import "./assets/main.css";
import routes from "./routes";

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
