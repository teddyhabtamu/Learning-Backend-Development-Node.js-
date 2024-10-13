const fs = require('fs');



// file writing and reading using fs (file system) module in node.js 

// fs.writeFile("./message.txt", "Just for fun", (err, data) =>{
//   if (err) throw err;
//   console.log("The file successfully created");

// } )

fs.readFile("./message.txt", "utf8", (err,data)=>{
  if (err) throw err;
  console.log(data); 
})