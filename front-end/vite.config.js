// vite.config.js
export default defineConfig({
  plugins: [vue()],
  configureWebpack: {
    devtool: 'source-map',
  },
  build: {
    sourcemap: true
  },
  // enable hydration mismatch details in production build
  __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
})