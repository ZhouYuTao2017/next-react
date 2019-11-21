const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withSize = require("next-size");
const withReactSvg = require("next-react-svg");
const path = require("path");
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
    inlineImageLimit: 16384,
    exclude: path.resolve(__dirname, 'public/svg'),
  }
];
const svgPages = [
  withReactSvg,
  {
    include: path.resolve(__dirname, "public/svg"),
  }
];
//
module.exports = [cssPages, imagesPage, withSize,svgPages];
