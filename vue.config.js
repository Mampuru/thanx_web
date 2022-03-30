// vue.config.js
module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://api.mythanx.xyz/',
    }
};
