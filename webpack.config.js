const path = require('path');
const  VueLoaderPlugin  = require('vue-loader/lib/plugin.js');
// const VueLoaderPlugin = require('vue-loader-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    entry: {
        bundle: "./src/main.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 81920,
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],   //数组中的文件格式的扩展名可省略
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": resolve('src'),
            "assets": resolve('src/assets')
        }
    },
    mode: "development",
    devServer: {
        contentBase: "./dist",
        port: "8899",
        inline: true
    }
}