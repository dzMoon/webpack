const path = require("path");
module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	mode: 'production',
	module: {
		rules: [{
				test: /\.css$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
					},
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [{
					loader: "file-loader",
					options: {
						name: 'img/[name][hash:8].[ext]',
					}
				}, {
					loader: "url-loader",
					options: {
						limit: 8196,
					}
				}],
			},
			// {
			// 	test: /\.m?js$/,
			// 	exclude: /(node_modules|bower_components)/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['@babel/preset-env']
			// 		}
			// 	}
			// }
		]
	}

}
