const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({ filename: '[name].css' });

    return {
    entry: {
        'index': './src/js/main.js',
        'oferta': './src/js/oferta.js',
        'wizyta': './src/js/wizyta.js',
        'warsztaty': './src/js/warsztaty.js',
        'kontakt': './src/js/kontakt.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                    loader: 'html-loader',
                    options: { minimize: true }
                }
            ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins:['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/',
                            name: '[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 99
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.95, 0.99],
                                speed: 1
                            }
                        }
                    }
                ],
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            favicon: "./src/favicon.ico",
            chunks: ['index']
        }),
        new HtmlWebPackPlugin({
            template: "./src/oferta.html",
            filename: "./oferta.html",
            favicon: "./src/favicon.ico",
            chunks: ['oferta']
        }),
        new HtmlWebPackPlugin({
            template: "./src/warsztaty.html",
            filename: "./warsztaty.html",
            favicon: "./src/favicon.ico",
            chunks: ['warsztaty']
        }),
        new HtmlWebPackPlugin({
            template: "./src/wizyta.html",
            filename: "./wizyta.html",
            favicon: "./src/favicon.ico",
            chunks: ['wizyta']
        }),
        new HtmlWebPackPlugin({
            template: "./src/kontakt.html",
            filename: "./kontakt.html",
            favicon: "./src/favicon.ico",
            chunks: ['kontakt']
        }),
        CSSExtract,
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map'
}
};