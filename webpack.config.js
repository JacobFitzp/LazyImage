const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/lazyimage.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lazyimage.min.js',
    },
};