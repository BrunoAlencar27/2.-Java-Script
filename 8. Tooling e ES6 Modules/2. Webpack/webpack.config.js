const path = require('path');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'public','assets','js'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test: /\.js/,
            exclude:/nome_modules/,
            use:{
                loader:'babel-loader'
            }
        }]
    }
}