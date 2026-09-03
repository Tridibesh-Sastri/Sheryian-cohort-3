console.log("server is running on port 3000");

// step 1 : first import the protocol
// step 2 : then create the server using the protocol
// step 3 : then listen to the server on a port

// setp 1 -> 

const http = require("http");

// step 2 ->

const server = http.createServer((req, res) => {
  res.write("ok got it"); // this is the response which we are sending to the client via port defined in step 3 
  res.end();
})


// step 3 ->

// dynamic port ->
let port = 30; // 

server.listen(port, () =>{
  console.log(`server is running on port ${port}`);
})