const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/learning/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "微信阅读";
      return args;
    });
  },
});
