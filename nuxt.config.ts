import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // buildDir: '/nuxt3-ci-cd-example/',
    // nitro: {
    //     output: { dir: '/nuxt3-ci-cd-example/'}
    // },
    vite: {
        publicDir: '/nuxt3-ci-cd-example/',
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
