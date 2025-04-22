import { createApp } from "vue";
import { plugin as vueTransitionsPlugin } from "@morev/vue-transitions";
import "@morev/vue-transitions/styles";
import "fadgram-ui/helpers";
import "prismjs/themes/prism-okaidia.css";
import "./style.css";

import App from "./App.vue";
const app = createApp(App);
const VueTransitionsPlugin = vueTransitionsPlugin({});
app.use(VueTransitionsPlugin);
app.mount("#app");
