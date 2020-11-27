module.exports = {
    publicPath: './',
    outputDir: 'portal',
    assetsDir: 'assets',
    lintOnSave: true,
    productionSourceMap: false,
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
    }
};
