module.exports = {
	entry: "./main.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: [
							[
								"@babel/plugin-transform-react-jsx",
								{ pragma: "create" }, // string, defaults to React.createElement. Replace the function used when compiling JSX expressions.
							],
						],
					},
				},
			},
			{
				test: /\.css$/,
				use: {
					loader: require.resolve("./cssloader.js"),
				},
			},
		],
	},
	mode: "development",
	optimization: {
		minimize: false,
	},
};
