'use strict'
const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      "@root": path.resolve("./src"),
      // "@apis": path.resolve("./src/apis"),
      // "@assets": path.resolve("./src/assets"),
      // "@common": path.resolve("./src/common"),
      // "@components": path.resolve("./src/components"),
      // "@layout": path.resolve("./src/layout"),
      // "@modules": path.resolve("./src/modules"),
      "@pages": path.resolve("./src/pages")
    }
  }
}