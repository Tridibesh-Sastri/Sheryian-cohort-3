- [x] Task 1: Active Implementation
```javascript

// step 1: import protocol

const http = require("http")

// step 2: create server with the protocall

const server = http.createServer((req,res)=>){
    console.log("Server Created")
}

server.get("/", (req, res)=>{
    res.end("I get it")
})

// step 3: listen server

let port = 340

server.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})

```

[x] Task 2: 

1. under the hood res is the data incoming streem and req is the outgoing stream to the server.js via given port mediated by nodejs but don't know nodejs handle all thing in low level
2. if I omit res.end() then the handshaking is stay incomplete so browser continue loading showing nothing
3. res.write() write something as the response messege to the request but don't complete the handshaking but res.end() also complet the hand shaking

[x] Task 3 : debuging

```javascript
const http = require("http");
const PORT = 80;

const server = http.createServer((req, res) => {
  res.end("Connected"); // res.end should be after res.end
  res.write("Additional Details");
});

server.listen(PORT, () => {
  console.log("Server running on port 8080");
});
```
[x] ACTIVE RECALL CHECKPOINT
1. callback inside server.listen(PORT, callback) fires when the operating system confirms port binding
2. don't know
[x] PRACTICAL CHALLENGE 

```javascript

// step 1: import protocol

const http = require("http")

// step 2: create server with the protocall

const server = http.createServer((req,res)=>){
    console.log("Server Created")
}

server.get("/api", (req, res)=>{
    res.end("API Route Reached")
})

// step 3: listen server

let port = 340

server.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})

```

