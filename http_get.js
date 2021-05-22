const https = require('https')
var li = []
var options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'GET'
}
//https.request(options,res=>console.log(res.statusCode))
function test()
{
 https.get('https://google.com',
    res=>{

        console.log(res.statusCode)
        res.on('data',(chunk)=>li.push(chunk))

        res.on('end',()=>{return li.toString()})

    })

}
async function test1()
{
    a = test()
}