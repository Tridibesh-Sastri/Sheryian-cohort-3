let obj = {
    name: "Josheph",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
    calculateBirthYear: (age)=>{
        let currentYear = new Date().getFullYear();
        return currentYear - age;
    }
}

// Accessing properties
// CRUD - Create, Read, Update, Delete
// Read
console.log(obj.name);
// Update
obj.age = 31;
console.log(obj.age);
// Create
obj.country = "USA";
console.log(obj.country);                   
// Delete
delete obj.city;
console.log(obj.city); // undefined

// accessing all keys of an object
console.log(Object.keys(obj)); // ["name", "age", "greet", "calculateBirthYear", "country"]
// accessing all values of an object
console.log(Object.values(obj)); // ["Josheph", 31, ƒ, ƒ, "USA"]
// accessing all entries of an object
console.log(Object.entries(obj)); // [["name", "Josheph"], ["age", 31], ["greet", ƒ], ["calculateBirthYear", ƒ], ["country", "USA"]]

// does object is reference type or value type?
// Object is reference type
// what are the different ways to create an object in JavaScript?
// 1. Object literal
let obj1 = {
    name: "Alice",
    age: 25
};
// 2. Object constructor
let obj2 = new Object();
obj2.name = "Bob";
obj2.age = 28;

// 3. Object.create()
let obj3 = Object.create(obj1);
console.log(obj3.name); // Alice
console.log(obj3.age); // 25
// 4. Class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let obj4 = new Person("Charlie", 35);
console.log(obj4.name); // Charlie
console.log(obj4.age); // 35 
// 5. Factory function
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
let obj5 = createPerson("David", 40);
console.log(obj5.name); // David
console.log(obj5.age); // 40    
// 6. Using Object.assign()
let obj6 = Object.assign({}, obj1);
console.log(obj6.name); // Alice
console.log(obj6.age); // 25
// 7. Using spread operator
let obj7 = {...obj1};
console.log(obj7.name); // Alice
console.log(obj7.age); // 25
// 8. Using JSON.parse() and JSON.stringify()
let obj8 = JSON.parse(JSON.stringify(obj1));
console.log(obj8.name); // Alice
console.log(obj8.age); // 25
// 9. Using Object.fromEntries()
let obj9 = Object.fromEntries(Object.entries(obj1));
console.log(obj9.name); // Alice
console.log(obj9.age); // 25
// 10. Using Object.defineProperty()
let obj10 = {};
Object.defineProperty(obj10, 'name', {
    value: "Eve",
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(obj10.name); // Eve 
// 11. Using Object.defineProperties()
let obj11 = {};
Object.defineProperties(obj11, {
    name: {
        value: "Frank",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 45,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(obj11.name); // Frank
console.log(obj11.age); // 45
// here is the list of all methods of an object
// 1. Object.keys()
// 2. Object.values()
// 3. Object.entries()
// 4. Object.assign()
// 5. Object.create()
// 6. Object.defineProperty()
// 7. Object.defineProperties()
// 8. Object.fromEntries()
// 9. Object.freeze()
// 10. Object.seal()
// 11. Object.isFrozen()
// 12. Object.isSealed()
// 13. Object.isExtensible()
// 14. Object.preventExtensions()
// 15. Object.getOwnPropertyDescriptor()
// 16. Object.getOwnPropertyDescriptors()
// 17. Object.getOwnPropertyNames()
// 18. Object.getOwnPropertySymbols()
// 19. Object.hasOwnProperty()
// 20. Object.prototype.toString()




const user = {
    name: "Valu vai",
    age: 30,
    city:'mumbai',
    country:'India',
    falafala: (supari)=>{
        console.log("Valu vai is eating supari " + supari); 
    }
}


// JSON.stringify() and JSON.parse()
let jsonString = JSON.stringify(user);
console.log(jsonString);
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

// Spread and rest Operator