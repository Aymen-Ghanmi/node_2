const fs = require('fs')
//console.log(fs)

// create file with fs

//fs.writeFile('gomycode.txt', 'hello chabeb', (err)=>{
//if (err){
//    console.log(err)
//}
//console.log("File created successfully !")

//})

//Synchronous

console.log("step one .... ")

let data = fs.readFileSync("./gomycode.txt")
console.log("Read :" + data.toString())

console.log("step three ....")