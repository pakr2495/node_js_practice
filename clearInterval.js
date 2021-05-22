function test()
{
    var i =0;
    var id =setInterval(() => {
        i = i+1
        if (i==10)
        {
            clearInterval(id)
        }
        else
        {
            console.log(i)
        }
    }, 2000);
}
function test1()
{
    var id = setInterval(() => {
        console.log('hi')
    }, 300);
    return id 
}
//test()
var id = test1()
setTimeout(() => {
    clearInterval(id)
    
}, 5000);