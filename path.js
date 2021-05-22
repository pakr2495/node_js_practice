const path = require('path');

console.log(path.dirname('test.txt'))
console.log(path.basename('test.txt',path.extname('test.txt')))
console.log(path.extname('test.txt'))
console.log(path.join('/','node_modules','event'))
console.log(path.resolve('test.txt'))