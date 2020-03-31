const path = require('path')
module.exports = {
    // 扩展webpack配置,使webpages加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname, 'packages')).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
}
