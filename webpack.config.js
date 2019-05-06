const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, argv) {
	const isDevMode = argv.mode !== 'production';
	const plugins = [new CleanWebpackPlugin()];

	plugins.push(
		new BundleAnalyzerPlugin({
			generateStatsFile: true,
			analyzerMode: argv.analyze ? 'server' : 'disabled'
		})
	);

	plugins.push(
		new HtmlWebpackPlugin({
			filename: './index.html',
			tite: 'My App',
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
			main: './src/scripts/index.js',
			style: './src/scripts/scss/index.scss'
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
								sourceMap: true,
								localIdentName: '[name]__[local]___[hash:base64:5]'
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
