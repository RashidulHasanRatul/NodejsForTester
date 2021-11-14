const http = require("http");

let server = http.createServer(function (req,res) {

    if (req.url==="/"){
        res.end("This is Home Page")

    } else if (req.url === "/about"){
        res.end("This is About page")
    }
})

server.listen(5050);
console.log("Server Run on  5050 Port");

