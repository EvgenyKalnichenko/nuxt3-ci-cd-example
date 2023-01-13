import {fileURLToPath} from "node:url";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    router: {
        base: '/nuxt3-ci-cd-example/'
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/css/base/_mixins.scss"; @import "@/assets/css/base/_variables.scss";',
                },
            },
        },
    },
    css: ['@/assets/css/main.scss'],
})
