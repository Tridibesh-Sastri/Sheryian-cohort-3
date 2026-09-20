use('shopApp')

// db.createCollection('users')

// db.users.insertOne({
//   name: "Tennesine",
//   email: "tennessine@gmail.com",
//   age: 25
// })

db.users.insertMany([{
  name:'Rahul',
  email: 'rahul@123',
  age: 22,
  city: 'Kolkata'
},
{
  name:'Raj',
  email: 'raj@123',
  age: 22,
  city: 'Kolkata'
},
{
  name:'Rabi',
  email: 'rabi@123',
  age: 22,
  city: 'Mumbai'
},
{
  name:'Neha',
  email: 'neha@123',
  age: 16,
  city: 'Chennai'
},
{
  name:'Ratan',
  email: 'rtan@123',
  age: 25,
  city: 'Kolkata'
}])

db.users.find()