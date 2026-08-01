console.log('Start');

// setTimeout -> Delay
setTimeout(function (){
    console.log('Hello World'); 
}, 7000);



//delay

setTimeout(function run(){
    console.log('3 seconds have passed');
},3000);

// setInterval(function (){
    //     console.log('Hello');
    // },4000);
   
   
console.log('End');


console.log('Start');

// setTimeout -> Delay
setTimeout(function (){
    console.log('Hello World'); 
}, 1000);
console.log('End');

console.log('Start');

//event loop handling
setTimeout(function (){
    console.log('Hello World'); 
}, 0);
console.log('End');

// event loop hnadling with callback quee

console.log('Start');

setTimeout(function (){
    console.log('1'); 
}, 0);
setTimeout(function (){
    console.log('2'); 
}, 0);
setTimeout(function (){
    console.log('3'); 
}, 0);
console.log('End');


//promise (microtask queue) - pending, resolved, rejected
//- pending
//- resolved
//- rejected
// what is starvation in event loop?
// starvation is a situation where the microtask queue is continuously filled with new tasks, preventing the event loop from processing other tasks in the callback queue. This can lead to delays in executing other tasks and can cause performance issues in the application.
// What comes under microtask queue? primises, mutation observer, process.nextTick() in node.js
// The microtask queue is a queue of tasks that are scheduled to run after the current task completes, but before the next task in the event loop. It includes tasks such as Promise callbacks, MutationObserver callbacks, and process.nextTick() callbacks in Node.js. These tasks are executed in a first-in-first-out (FIFO) order, and they have a higher priority than tasks in the callback queue.

let response = fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(response);