const path = require('path');
const a = path.basename("D:/Study/Learnings files/Node JS learnings/osmodules.js"); 
const b = path.dirname("D:/Study/Learnings files/Node JS learnings/osmodules.js")
const c = path.extname(__filename);
console.log(a);
console.log(b);
console.log(c);