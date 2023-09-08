const path = require('path');

//console.log(__dirname);
//console.log(__filename);

// path
const filePath = path.join('/content', 'subfolder', 'test.txt');
const fileName  = path.basename(filePath);
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(filePath)
console.log(fileName)
console.log(absolutePath)