const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);

  fs.readdir('./',function (err,data) {

    if (err){
        console.log("This is Error",err);
    } else {
        console.log("This is File",data)
    }
})
