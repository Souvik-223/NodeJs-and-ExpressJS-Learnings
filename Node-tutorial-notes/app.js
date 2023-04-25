// const {writeFileSync} = require('fs')

// for (let i = 0; i < 100000; i++) {
//     writeFileSync('content/big-text.txt',`Hello i am souvik and i am a good boy who codes daily - ${i}\n`,{flag : 'a'});
// }

var http = require('http')
var fs = require('fs');
const { error } = require('console');

http.createServer(function (req, res){
    const filestream = fs.createReadStream('content/big-text.txt','utf-8');
    filestream.on('open',()=>{
        filestream.pipe(res)
    })
    filestream.on('error',()=>{
        res.end(error)
    })
}).listen(5000)