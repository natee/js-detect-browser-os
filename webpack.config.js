var path = require("path");

module.exports = {
    entry: ['./src/browser.js'],
    output: {
        path: path.join(__dirname, './dist'), 
        filename: 'browser.min.js'
    }
}; 