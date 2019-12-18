const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withSize = require("next-size");
const withReactSvg = require("next-react-svg");
const path = require("path");
const withTM = require("@weco/next-plugin-transpile-modules");
const { interpolateName } = require("loader-utils");
const normalizePath = require("normalize-path");
const cssesc = require("cssesc");

const getLocalIdent = (loaderContext, localIdentName, localName, options) => {
  const filenameReservedRegex = /[<>:"/\\|?*\x00-\x1F]/g;
  // eslint-disable-next-line no-control-regex
  const reControlChars = /[\u0000-\u001f\u0080-\u009f]/g;
  const reRelativePath = /^\.+/;
  if (!options.context) {
    // eslint-disable-next-line no-param-reassign
    options.context = loaderContext.rootContext;
  }

  const request = normalizePath(
    path.relative(options.context || "", loaderContext.resourcePath)
  );

  // eslint-disable-next-line no-param-reassign
  options.content = `${options.hashPrefix + request}+${unescape(localName)}`;

  // Using `[path]` placeholder outputs `/` we need escape their
  // Also directories can contains invalid characters for css we need escape their too
  return cssesc(
    interpolateName(loaderContext, localIdentName, options)
      // For `[hash]` placeholder
      .replace(/^((-?[0-9])|--)/, "_$1")
      .replace(filenameReservedRegex, "-")
      .replace(reControlChars, "-")
      .replace(reRelativePath, "-")
      .replace(/\./g, "-"),
    { isIdentifier: true }
  ).replace(/\\\[local\\\]/gi, localName);
};

// next下css配置
const cssPages = [
  withCSS,
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      sourceMap: true,
      localIdentName: "[local]___[hash:base64:5]",
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      getLocalIdent: (context, localIdentName, localName, options) => {
        let hz = context.resourcePath.replace(context.rootContext, "");
        if (/node_modules/.test(hz)) {
          return localName;
        } else {
          console.log(
            getLocalIdent(context, localIdentName, localName, options)
          );
          return getLocalIdent(context, localIdentName, localName, options);
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
    exclude: path.resolve(__dirname, "public/svg")
  }
];
const svgPages = [
  withReactSvg,
  {
    include: path.resolve(__dirname, "public/svg")
  }
];
const withTMPage = [
  withTM,
  {
    transpileModules: ["antd", "antd-mobile"]
  }
];
//
module.exports = [cssPages, imagesPage, withSize, svgPages, withTMPage];
