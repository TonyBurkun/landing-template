const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');





module.exports = function(env) {
    let isProduction = false;
    if (env) {
        isProduction = env.production;
    }

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                    test: /.\.s[ac]ss$/,
                    use: [
                        // MiniCssExtractPlugin.loader,
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        // 'style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },
                {
                    test: /\.(js)$/,
                    use: [{
                        loader: 'babel-loader',
                        // options: {
                        //     presets: ['es2015']
                        // }
                    }]
                },
                { test: /\.svg$/, use: 'svg-inline-loader' },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/',
                    },
                },
                // {
                //     test: /\.html$/i,
                //     loader: 'html-loader',
                //     options: {
                //         minimize: true,
                //     },
                // },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.html',
            }),
            // new HtmlWebpackPlugin({
            //     filename: 'about.html',
            //     template: 'src/about.html',
            //     chunks: []
            // }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPartialsPlugin({
                path: path.join(__dirname, './src/templates/header.html'),
                location: 'header',
                template_filename: ['index.html']
            }),
            new HtmlWebpackPartialsPlugin({
                path: path.join(__dirname, './src/templates/footer.html'),
                location: 'footer',
                template_filename: ['index.html']
            })
        ].concat(isProduction ? [new MiniCssExtractPlugin()] : []),
    };
}