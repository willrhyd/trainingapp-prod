import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'https://free-pmc.herokuapp.com';
axios.defaults.withCredentials = true;
