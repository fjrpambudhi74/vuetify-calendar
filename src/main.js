import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDUvoa9zXnhyxkVN67q3laILa_xM2BbCEw",
  authDomain: "vuetify-calendar-909d9.firebaseapp.com",
  databaseURL: "https://vuetify-calendar-909d9.firebaseio.com",
  projectId: "vuetify-calendar-909d9",
  storageBucket: "vuetify-calendar-909d9.appspot.com",
  messagingSenderId: "1062159275123",
  appId: "1:1062159275123:web:9332addbd5007529774606"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
