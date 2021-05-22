function test(num)
{
    return new Promise((resolve,reject)=>{
    
        if  (num%2==0)
        {
            resolve('even number')
        }
        else
        {
            reject('odd number')
        }
    }
    )

}
function test2()
{
    console.log('hi')
}

async function  test1()
{
    console.log(await test(3).catch((err)=>console.log(err)))
    test2()
    console.log('testaa')
}

test1()
console.log('asfsfsdf')
setTimeout(() => {
console.log('hi from time out')
    
}, 0);
//test(2).then(num=>console.log(num)).catch(num=>console.log(num))

