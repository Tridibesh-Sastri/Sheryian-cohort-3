// console.log("Server is running on port 3000");

let http = require("http")

console.log(http)

let server = http.createServer((req, res) => {
    console.log("hello from server")
    // res.end("Main server page pe hunn............")
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})