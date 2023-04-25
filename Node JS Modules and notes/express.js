const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const data = fs.readFileSync('index.html',)
    res.end(data)
})
app.get('/about', (req, res) => {
  res.send('<h1>About Souvik Chakraborty</h1><p>This is a About Souvik chakraborty</p>')
})


app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})