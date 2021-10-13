const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js"
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".json"]
	},
	module: {
		rules: [
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.ts?x$/, use: "ts-loader" }
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			filename: "index.html",
			template: './public/template.html'
		})
	],
	optimization: {
		splitChunks: {
			// always create vendor.js
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "initial",
					enforce: true
				}
			}
		}
	},
	devServer: {
		port: 3000,
		historyApiFallback: true // redirect all the requests to "index.html"
	}
}
