
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: './blog.html',
            template: './src/blog.html'
        }),
        new HtmlWebpackPlugin({
            filename: './contact.html',
            template: './src/contact.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "images", to: "images" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 3000
    }
}