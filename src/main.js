import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import { SetupCalendar, Calendar, DatePicker} from 'v-calendar'; */
import VCalendar from 'v-calendar';


createApp(App).use(router)
.use(VCalendar, {})
/* .use(SetupCalendar, {}).
use(Calendar, {}).
use(DatePicker, {}) */
.mount('#app')
