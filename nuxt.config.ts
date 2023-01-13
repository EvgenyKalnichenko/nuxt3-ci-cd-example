// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
