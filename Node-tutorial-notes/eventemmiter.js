const eventemmiter = require('events')

const customeemmiter = new eventemmiter()
customeemmiter.on('Hello',()=> {
    console.log("Hello world")
})

customeemmiter.emit('Hello')