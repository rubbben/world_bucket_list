const path = require('path');

module.exports = {
    watch: true,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //indique au serveur ce qu'on a besoin qu'il nous montre, qu'il nous serve
        open: true,
        headers: {
            "Access-Control-Allow-Origin": "*" 
        }
    }
}