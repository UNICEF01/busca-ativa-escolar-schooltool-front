// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueExcelXlsx from "vue-excel-xlsx";
import VueBlobJsonCsv from 'vue-blob-json-csv';

import Vue from 'vue'

import JsonExcel from "vue-json-excel";

import VueApexCharts from 'vue-apexcharts';

import JwPagination from 'jw-vue-pagination';

import VueCharts from 'vue-chartjs';

Vue.component('jw-pagination', JwPagination);


// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

import { auth } from './firebase.js'

// Toaster
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast);
Vue.use(VueExcelXlsx);
Vue.use(VueBlobJsonCsv);
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);
Vue.component('BarChart', VueCharts);
Vue.component("downloadExcel", JsonExcel);

//https://www.npmjs.com/package/vue-json-excel
// Sync store with router
sync(store, router)

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      i18n,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
