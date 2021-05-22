const express = require('express')

var app = express()

app.get('/',(req,res,next)=>{

    console.log('hi');
    next()

},(req,res,next)=>{

    console.log('hello')
    res.send('hi')
})
app.use((err,req,res,next)=>
{
 console.log(err)
})

app.listen(3000,()=>console.log('server started'))