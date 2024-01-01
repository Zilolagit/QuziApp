import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import "primeflex/primeflex.min.css"
import "@/flag.css"


import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Menu from 'primevue/menu';
import Badge from "primevue/badge"
import Avatar from "primevue/avatar"
import ScrollTop from 'primevue/scrolltop';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressBar from 'primevue/progressbar';
import Slider from 'primevue/slider';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import Password from 'primevue/password';
import InputMask from 'primevue/inputmask';
import Textarea from 'primevue/textarea';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);


app.component("Menu", Menu)
app.component("Avatar", Avatar)
app.component("Badge", Badge)
app.component("ScrollTop", ScrollTop)
app.component("InputText", InputText)
app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("ProgressBar", ProgressBar)
app.component("Slider", Slider)
app.component("Dropdown", Dropdown)
app.component("InputNumber", InputNumber)
app.component("Tag", Tag)
app.component("Button", Button)
app.component("TriStateCheckbox", TriStateCheckbox)
app.component("Password", Password)
app.component("InputMask", InputMask)
app.component("MultiSelect", MultiSelect)
app.component("Textarea", Textarea)

app.mount('#app')