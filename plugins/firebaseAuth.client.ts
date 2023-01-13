import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {

  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey:  config.VUE_APP_API_KEY,
    authDomain: config.VUE_APP_AUTH_DOMAIN,
    projectId: config.VUE_APP_PROJECT_ID
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  initUser();

  const auth = getAuth();

  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);
});
