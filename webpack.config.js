var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
    
webpackconfig = {
    entry: {
        echarts: './src/js/echarts.common.min.js',
    }, 
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "js/[name]-[chunkhash].js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'home.html',
            template:'./src/home.html',
            title: 'home', 
        }),
        new HtmlWebpackPlugin({
            filename:'list.html',
            template:'./src/list.html',
            title: 'list', 
        }),
        new HtmlWebpackPlugin({
            filename:'categray.html',
            template:'./src/categray.html',
            title: 'categray', 
        }),
        new HtmlWebpackPlugin({
            filename:'weather.html',
            template:'./src/weather.html',
            title: 'weather', 
            chunks: ["echarts"],
        }),
    ]
}