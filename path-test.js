const { resolve } = require('path');
const path = require('path');

var join = path.join = path.join(__dirname, '/storage');
var resolve = path.resolve = path.resolve(__dirname, '/storage');
console.log('----------------------');
console.log(join);
console.log(resolve);