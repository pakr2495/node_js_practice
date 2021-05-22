const fs = require('fs');

fs.stat('test.txt',(err,stat)=>{

    if (err)
    {
        console.log('file not found');
    }
    console.log(stat.size)
    console.log(stat.isFile())
})