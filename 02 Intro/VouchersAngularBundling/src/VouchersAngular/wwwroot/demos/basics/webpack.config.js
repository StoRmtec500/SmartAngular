
module.exports = {
    entry: {
        app: './wwwroot/demos/basics/js/app.js'
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: './wwwroot/demos/basics/js/',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: []
    }
};