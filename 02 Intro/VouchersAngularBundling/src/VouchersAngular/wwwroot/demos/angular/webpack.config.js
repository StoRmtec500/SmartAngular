
module.exports = {
    entry: {
        app: './wwwroot/demos/angular/js/index.js'
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: './wwwroot/demos/angular/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: "raw-loader"
        }]
    }
};