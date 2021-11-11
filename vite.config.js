import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],    // element plus 自动导入
    }),
  ],
  alias: {
    '@': path.resolve(__dirname, 'src'),
    'vue': 'vue/dist/vue.esm-bundler.js'  // 定义vue的别名
  }
})
