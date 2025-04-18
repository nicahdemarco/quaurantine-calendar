module.exports = {
  // Base URL for GitHub Pages
  publicPath: process.env.NODE_ENV === 'production'
    ? '/quaurantine-calendar/'
    : '/',
  
  // Output directory for built files
  outputDir: 'dist',
  
  // Whether to generate source maps for production
  productionSourceMap: false,
  
  // Configure webpack-dev-server
  devServer: {
    port: 8080,
    open: true
  }
} 