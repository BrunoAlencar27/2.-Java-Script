const path = required('path');

module.exports = {
    //arquivos de entrada e saída
    mode:'development',
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'public','assets','js',),
        filename:'bundle.js'

    },
}