const fs = require('fs')

const fd =fs.openSync('test.txt','a+')
fs.writeSync(fd,"hi hello bydsaddasd")
console.log(fs.readFileSync(fd,'utf-8')
)
fs.closeSync(fd)
