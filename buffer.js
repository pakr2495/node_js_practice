const buf = Buffer.allocUnsafe(1024)
a= buf.write('hello',"utf8")

console.log(buf)