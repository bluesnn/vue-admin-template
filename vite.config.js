import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Unocss from 'unocss/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
    // https://github.com/vitejs/vite/issues/5833 打包css报错问题
    // postcss: {
    //   plugins: [
    //     {
    //       postcssPlugin: 'internal:charset-removal',
    //       AtRule: {
    //         charset: atRule => {
    //           if (atRule.name === 'charset') {
    //             atRule.remove()
    //           }
    //         }
    //       }
    //     }
    //   ]
    // }
  },
  plugins: [
    vue(),
    Unocss(),
    DefineOptions()
  ]
})
