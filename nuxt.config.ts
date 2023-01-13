import {fileURLToPath} from "node:url";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    buildDir: '.output/nuxt3-ci-cd-example/',
    // nitro: {
    //     output: { dir: '/nuxt3-ci-cd-example/'}
    // },
    // alias: {
    //     'images': fileURLToPath(new URL('./assets/432/images', import.meta.url)),
    //     'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
    //     'assets': fileURLToPath(new URL('./assets/dasdsasad/data', import.meta.url))
    // },
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
