// vue.config.js
module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: "https://api.mythanx.xyz/",
    port: 3000
  },
};
