// vue.config.js
module.exports = {
	runtimeCompiler: true,
	devServer: {
		proxy: "https://api.mythanx.xyz/",
		port: process.env.VUE_APP_SERVER_PORT,
	},
};
