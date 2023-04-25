const EventEmitter = require('Events');

class MyEmitter extends EventEmitter{}

const myEmitter = new EventEmitter 

MyEmitter.on('Waterfull', ()=>{
    console.log("Please turn off the motor!");
    setTimeout(() => {
       console.log("The motor has been turned off"); 
    }, 3000);
});

console.log("The Script is Running");
myEmitter.emit('Waterfull');
console.log("The script is still running");