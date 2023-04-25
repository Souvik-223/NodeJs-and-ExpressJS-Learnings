const {readFile, writeFile} = require('fs').promises

// Best way to deal with promises and the easiest 
// Start function for the direct method of dealing with promises

const start = async() => {
        try {
            const first = await readFile('content/first.txt','utf-8')
            const second = await readFile('content/second.txt','utf-8')
            await writeFile('content/result.txt',`This is awsome : ${first} ${second}`)
            console.log(first, second);
        } catch (error) {
            console.log(error);
        }
    } 


// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

//Start function for the util module method of dealing with promises

// const start = async() => {
//         try {
//             const first = await readFilePromise('content/first.txt','utf-8')
//             const second = await readFilePromise('content/second.txt','utf-8')
//             await writeFilePromise('content/result.txt',`This is awsome : ${first} ${second}`)
//             console.log(first, second);
//         } catch (error) {
//             console.log(error);
//         }
//     }


start()


// creating the qwraper function with promise to get the data from the file

// const gettext = (path) => {
//     return new Promise((resolve,reject) => {   //Creating a new promise 
//         readFile(path,'utf-8',(err,data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     }) 
// }



//Start function for the wrapper function 

// const start = async() => {
//     try {
//         const first = await gettext('content/first.txt')
//         const second = await gettext('content/second.txt')
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// }



//Getting the text and using it 

// gettext('content/first.txt')
// .then((result)=> console.log(result))
// .catch((err)=> console.log(err))


