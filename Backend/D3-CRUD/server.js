const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;


let users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com"
    }
];

// post -> create

app.post('/create', (req, res) => {
    let body = req.body;
    console.log(body);
    users.push(body);
    res.send('User created successfully');
})


// get -> read
app.get('/', (req, res) => {
    res.send(users);
})

// delete -> delete
app.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    users = users.filter(user => user.id != id);
    res.send(`User with id ${id} deleted successfully`);
})

// update -> put
app.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    users = users.map(user => {
        if (user.id == id) {
            return body;
        }
        return user;
    })

    res.send(`User with id ${id} updated successfully`);
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})