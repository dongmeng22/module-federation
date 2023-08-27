import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";

const Content = defineAsyncComponent(() => import("host/Content"));
const Button = defineAsyncComponent(() => import("host/Button"));

const app = createApp(App);

app.component('remote-button', Button);
app.component('remote-content', Content);

app.mount("#app");