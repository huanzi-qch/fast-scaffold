module.exports = {
    publicPath: './',
    outputDir: 'portal',
    assetsDir: 'assets',
    lintOnSave: true,
    productionSourceMap: false,
    devtools: 'source-map', // 或者可以是 'cheap-source-map' 用于更快的构建速度，但源码映射可能不那么精确
    devServer: {
        port: '10010',
        open: false,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/auth': {
                target: 'http://localhost:10086',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/auth': '/'
                }
            },
            '/api': {
                target: 'http://localhost:10086',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    pwa:{
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
};
