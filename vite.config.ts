import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'

const config: UserConfig = {
  plugins: [
    Vue()
  ],
  resolve: {
    alias: {
      '@':path.resolve(__dirname, 'src')
    }
  }
}

export default config
