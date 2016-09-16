var config = {
	entry: ['./src/js/index.js'],
	output: {
		filename: 'build/index.js'
	},
	module: {
		preLoaders: [
			{ loader: 'eslint', test: /\.js$/,  exclude: /node_modules/ }
		],

		loaders: [
			{ loader: 'babel', query: { presets: ['es2015', 'react'] }, test: [/\.js$/, /\.jsx$/], exclude: [ /node_modules/, /__tests__/ ] },
			{ loader: 'style-loader!css-loader!sass-loader', test: /\.scss$/, exclude: [ /node_modules/, /__tests__/ ] }
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	eslint: {
        failOnWarning: true,
        failOnError: true
    }
}

module.exports = config;