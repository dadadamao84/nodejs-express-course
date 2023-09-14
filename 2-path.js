const path = require('path');

// current os info
const { currentOs, sayHi, items } = require('./utils');
console.log(currentOs.name, currentOs.release)
sayHi(currentOs.username);

// path
const filePath = path.join('/content', 'subfolder', 'test.txt');
const fileName  = path.basename(filePath);
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(filePath)
console.log(fileName)
console.log(absolutePath)