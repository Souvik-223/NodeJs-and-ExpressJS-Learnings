const http = require('http');
const fs = require('fs');
const port = process.env.port || 3000;
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html',)
        res.end(data)
    }
    else if (req.url == '/about') {
        res.statusCode=200;
        res.end('<h1>About Souvik Chakraborty</h1><p>This is a About Souvik chakraborty</p>')
    }
    else {
        res.statusCode=200;
        res.end('<h1>http:/error</h1><br><p>Item not found</p>')
    }

});

server.listen(port, () => {
    console.log(`Server is listning on port ${port}`);
})