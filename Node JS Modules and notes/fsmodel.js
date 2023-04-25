const fs = require('fs');


//Reading in the file 

//This is the asynchronous method of reading files 
fs.readFile('file.txr','utf-8',(err,data) => {
    console.log(err,data);
})

//This is how we apply locks and use the synchronous method of reading files 
fs.readFileSync('file.txr','utf-8',(err,data) => {
    console.log(err,data);
})
console.log(a.toString());
console.log("Finished reading file"); 



//Writihng in the file 

//This is the asynchronous method of writing files 
fs.writeFile('file.txr',"This is the data",() => {
    console.log("Writing to the file.");
})

//This is how we apply locks and use the synchronous method of writing files 
fs.writeFile('file.txr',"This is the data",() => {
    console.log("Writing to the file.");
})
console.log("finished writing");