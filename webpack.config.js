module.exports={
    mode: "development",
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
    },
    //ビルド対象の拡張子設定
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    module: {
        rules: [
            {
                resource: {
                    test: /\.jsx?$/,
                    exclude: /node_modules/
                },
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ["env", "react"]
                    }
                }
            }
        ]
    }
};