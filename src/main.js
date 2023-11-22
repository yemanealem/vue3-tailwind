import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";

import PrimeVue from 'primevue/config';
import Panel from 'primevue/panel';
import Tailwind from 'primevue/passthrough/tailwind';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Sidebar from 'primevue/sidebar';
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import ripple from "primevue/ripple";
import Message from "primevue/message";
import Store from "./store/Store";

const app = createApp(App);
app.component('Panel', Panel);
app.component('Card',Card)
app.component('Sidebar',Sidebar)
app.component('Divider ',Divider )
app.component('Avatar',Avatar)
app.component('Button',Button)
app.component('ripple',ripple)
app.component('Message',Message)
app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.use(Store);
app.mount('#app');
