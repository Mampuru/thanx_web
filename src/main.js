import { createApp } from "vue";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app
import store from "@/store/store.js";
import router from "@/router/router.js";
import App from "@/App.vue";

createApp(App).use(router).use(store).mount("#app");
