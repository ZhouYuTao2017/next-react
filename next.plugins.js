const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withSize = require("next-size");
const withReactSvg = require("next-react-svg");
const path = require("path");
const withTM = require('@weco/next-plugin-transpile-modules');
const {getLocalIdent} = require("css-loader/dist/utils");
// next下css配置
const cssPages = [
  withCSS,
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      sourceMap: true,
      localIdentName: "[local]___[hash:base64:5]",
      getLocalIdent: (context, localIdentName, localName, options) => {
        let hz = context.resourcePath.replace(context.rootContext, "");
        if (/node_modules/.test(hz)) {
          return localName;
        } else {
          return getLocalIdent(
            context,
            localIdentName,
            localName,
            options
          );
        }
      }  
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
const withTMPage=[withTM,{
  transpileModules: ['antd', 'antd-mobile']
}]
//
module.exports = [cssPages, imagesPage, withSize,svgPages,withTMPage];
