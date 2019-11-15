const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withImages = require("next-images");
// next下css配置
const cssPages = [
  withCSS,
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      sourceMap: true,
      localIdentName: "[local]___[hash:base64:5]"
    }
  }
];

// images page
const imagesPage = [
  withImages,
  {
    inlineImageLimit: 16384
  }
];
//
module.exports = [cssPages, withTypescript, imagesPage];
