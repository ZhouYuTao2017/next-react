// 融合page
const withPlugins = require("next-compose-plugins");
// next插件
const path = require("path");

const nextPlugins = require("./next.plugins");

module.exports = withPlugins(nextPlugins, {
  distDir: "dist", // 定义构建目录,默认为.next

  webpak(config, options) {
    const { dir, defaultLoaders } = options;
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
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
    config.resolve.alias["@/img"] = path.resolve(__dirname, "/static/img");
    return config;
  }
});
