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
})
server.listen(5000)