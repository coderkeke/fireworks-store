const path = require("path");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  //  基本路径
  publicPath: "./",
  //  构建时的输出目录
  outputDir: "dist",
  //  放置静态资源的目录
  assetsDir: "static",
  //  html 的输出路径
  indexPath: "index.html",
  // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 运行时版本是否需要编译
  runtimeCompiler: true,
  //是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: true,
  //webpack配置，值位对象时会合并配置，为方法时会改写配置--------------------------------------------
  configureWebpack: config => {
    // if (debug) {
    //   // 开发环境配置
    //   config.devtool = "cheap-module-eval-source-map";
    // } else {
    //   // 生产环境配置
    //   config.devtool = "cheap-module-source-map";
    // }

    Object.assign(config, {
      // 开发生产共同配置，新增一些别名设置
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
          "@c": path.resolve(__dirname, "./src/components"),
          "@v": path.resolve(__dirname, "./src/views")
        } // 别名配置
      }
    });
  },

  devServer: {
    open: true,
    host: "0.0.0.0",
    // port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      "/api": {
        target: "http://app.rmsdmedia.com",
        changeOrigin: true,
        secure: false,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${path.resolve(__dirname, "src/assets/css/var.less")}";`
        }
      }
    }
  }
};
