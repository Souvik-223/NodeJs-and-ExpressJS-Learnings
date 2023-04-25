//modules
const path = require('path')
const http = require('http')
const os = require('os')
const fs = require('fs');  // - It is of two types blocking synchronous and  non blocking asynchronous 
const { isUtf8 } = require('buffer');
const { Http2ServerRequest } = require('http2');

//os module 
console.log(os.uptime());


//path module 
console.log(path.sep);

const filepath = path.join("/subfolder", "supersub", "source")
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const absolute = path.resolve(__dirname)
console.log(absolute);

//fs module
const first = fs.readFileSync('./content/first.txt', 'Utf8')
const second = fs.readFileSync('./content/second.txt', 'Utf8')

// We can also write to the file this way 

writeFileSync(
    './content/result.txt',
    'here is the result : ${first}, ${Second}'
)

// Http Module:- 
const server = Http.createserver((req, res) => {
    if (req.url == '/') {
        res.end("Welcome to homepage")
    }
    if (req.url == '/about') {
        res.end("Welcome to about")
    }
    if (req.url == '/team') {
        res.end("Welcome to my team")
    }
    // res.write("Welcome to our home page")
    res.end(`
    <h1>OOps</h1> 
    <p>We can't find the page you are looking for</p>
    `)
})
server.listen(5000)