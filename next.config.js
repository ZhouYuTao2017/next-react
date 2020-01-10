// 融合page
const withPlugins = require("next-compose-plugins");
// next插件
const path = require("path");

const nextPlugins = require("./next.plugins");

module.exports = withPlugins(nextPlugins, {
  distDir: "dist", // 定义构建目录,默认为.next
  useFileSystemPublicRoutes: false, // 使用自定义路由

  webpack(config, options) {
    const { dir, defaultLoaders } = options;
    // config.module.rules.push({
    //   test: /\.(tsx)$/,
    //   enforce: "pre",
    //   use: [
    //     {
    //       loader: "eslint-loader",
    //       options: {
    //         quiet: true
    //       }
    //     }
    //   ],
    //   include: [dir],
    //   exclude: /node_modules/
    // });
    if (config.externals) {
      const includes = [/antd-mobile/, /antd/];
      config.externals = config.externals.map(external => {
        if (typeof external !== "function") return external;
        return (ctx, req, cb) => {
          return includes.find(include =>
            req.startsWith(".")
              ? include.test(path.resolve(ctx, req))
              : include.test(req)
          )
            ? cb()
            : external(ctx, req, cb);
        };
      });
    }
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      options: {
        runtimeCompat: true,
      },
    });
    return config;
  }
});
