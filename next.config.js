// 融合page
const withPlugins = require("next-compose-plugins");
// next插件
const path = require("path");

const nextPlugins = require("./next.plugins");

module.exports = withPlugins(nextPlugins, {
  distDir: "dist", // 定义构建目录,默认为.next

  webpak(config, options) {
    const { dir, defaultLoaders, pluginOptions } = options;
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      use: {
        loader: defaultLoaders.babel,
        options: pluginOptions.options
      }
    });
    config.module.rules.push({
      test: /\.(tsx)$/,
      enforce: "pre",
      use: [
        {
          loader: "eslint-loader",
          options: {
            quiet: true
          }
        }
      ],
      include: [dir],
      exclude: /node_modules/
    });
    return config;
  }
});
