function test ()
{
    console.log('hi')
    var a =setTimeout(()=>console.log('inside time out 1'),100000)
    clearTimeout(a)
}
function test1 ()
{
    console.log('hello')
    setTimeout(()=>console.log('inside time out 2'),0)
}

test()
test1()

