const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, argv) {
	const isDevMode = argv.mode !== 'production';
	const plugins = [new CleanWebpackPlugin()];

	plugins.push(
		new HtmlWebpackPlugin({
			filename: './index.html',
			tite: 'Movie SA',
			hash: true,
			template: './src/template/index.html'
		})
	);

	if (!isDevMode) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: '[name].css'
			})
		);
	}

	return {
		entry: {
			main: './src/scripts/index.js'
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', '.css', '.scss']
		},
		devtool: isDevMode ? 'eval-source-map' : 'hidden-source-map',
		devServer: {
			hot: true,
			watchOptions: {
				pool: true
			},
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			port: 9000
		},

		module: {
			rules: [
				{
					test: /\.s?css$/,
					use: [
						isDevMode
							? { loader: 'style-loader', options: { sourceMap: true } }
							: {
									loader: MiniCssExtractPlugin.loader,
									options: { sourceMap: true }
							  },
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{ loader: 'postcss-loader', options: { sourceMap: true } },
						{ loader: 'sass-loader', options: { sourceMap: true } }
					]
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loaders: ['babel-loader']
				}
			]
		},
		plugins,
		output: {
			filename: `[name].js`
		}
	};
};
