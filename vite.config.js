const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Lab3home: resolve(__dirname, 'Lab3home.html'),
        Lab3prod1: resolve(__dirname, 'Lab3prod1.html'),
        Lab3prod2: resolve(__dirname, 'Lab3prod2.html')
        
      }
    }
  }
})