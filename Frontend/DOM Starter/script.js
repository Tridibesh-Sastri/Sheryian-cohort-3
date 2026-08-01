console.log(document);
const body = document.body;

// nodelist vs. HTMLCollection
// nodelist counts everything as node and it counts (-blank spaces, whitespaces, comments, linebreaks, texts, etc.) as text nodes while HTMLCollection counts only elements.
// HTMLCollection is a live collection of elements, while NodeList is a static collection of nodes. This means that if the DOM changes, the HTMLCollection will automatically update to reflect those changes, while the NodeList will not.
// childNodes is a property of the Node interface that returns a live NodeList of child nodes of the specified node. This includes all child nodes, including text nodes and comment nodes, while children only returns an HTMLCollection of element nodes.
// children is a property of the Element interface that returns an HTMLCollection of element nodes that are children of the specified element.
console.log(body);
console.log(body.children);
console.log(body.childNodes);

const textContent = body.getElementsByTagName('h1')[0].textContent;
console.log(textContent);
// changing the text content of the h1 element

// textContent = 'Hello, World!';

const main = document.querySelector('main');
console.log(main);
const h1 = main.querySelector('h1');
console.log(h1);
// add delay to see the change in the h1 element
setTimeout(() => {
    h1.textContent = 'Hey I\'m Changing the text content of the h1 element';
}, 2000);

// changing on click event of the h1 element
h1.addEventListener('click', () => {
    h1.textContent = 'Hey I\'m Changing on click event';
    setTimeout(() => {
        h1.textContent = textContent;
    }, 1000);
});

// temporary chnging for custom timespan after which it will revert back to the original text content
setTimeout(() => {
    h1.textContent = 'Hey I\'m Changing the text content of the h1 element';
}, 4000);
// revert back to the original text content after 6 seconds
setTimeout(() => {
    h1.textContent = textContent;
}, 6000);

// chnging style of the h1 element
h1.style.color = 'red';
h1.style.fontSize = '3rem';
h1.style.textAlign = 'center';

let textColors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'yellow', 'brown', 'black', 'white'];
let clickCount = 0;
h1.addEventListener('click', ()=>{
    h1.style.color = textColors[ clickCount % textColors.length ];
    clickCount++;
});

// - textContent -> Only returns the text content of the element and its descendants. It does not return any HTML tags or attributes. It is useful for getting or setting the text content of an element without any formatting or styling.
// - innerHTML -> Returns or sets the HTML content of the element and its descendants. It includes all HTML tags and attributes.
// - innerText -> Returns or sets the text content of the element and its descendants, but it does not include any HTML tags. It is useful for getting or setting the visible text content of an element.
// 99% of time we use textContent and innerHTML, innerText is not used much because it is not supported in all browsers and it can be slow for large documents.

// For text modification (textContent, innerHTML, innerText) and for style modification (element
// .style.property) we can use the same methods for any element, not just h1. For example, we can use the same methods for p, div, span, etc.

// Classes
//    - classList.add() -> adds the specified class passed as an argument of the method
//    - classList.remove() -> removes the specified class passed as an argument of the method
//    - classList.contain() -> checks if the element has the specified class passed as an argument of the method returns true or false
//    - classList.toggle() -> checks if the element has the specified class passed as an argument of the method, if it has it removes it, if it doesn't have it adds it
//    - classList.replace() -> replaces the specified class with the new class passed as an argument of the method or we can say 0th argument is the class to be replaced and 1st argument is the new class to be added

const bulb = document.querySelector('#bulb');
// const bulb = document.getElementById('bulb');
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
   if( bulb.classList.toggle('bulb-on')){
    button.textContent = 'Turn Off';
   } else {
    button.textContent = 'Turn On';
   }
})

// selections -> document.querySelector(), document.getElementById(), document.getElementsByTagName(), document.getElementsByClassName(), document.querySelectorAll()
// Interactivity -> Events -> Event Listeners -> Event Handlers -> Callback Functions
//  - Event Listeners -> addEventListener() method is used to attach an event handler to the specified element. It takes two arguments, the first argument is the event type and the second argument is the callback function which will be executed when the event occurs. The callback function can be an anonymous function or a named function. The event type can be any valid event type like 'click', 'mouseover', 'mouseout', 'keydown', 'keyup', etc. The callback function can take an event object as an argument which contains information about the event that occurred. The event object has properties like target, type, currentTarget, etc. The target property returns the element that triggered the event. The type property returns the type of the event that occurred. The currentTarget property returns the element that the event listener is attached to.
//  - Event Handlers -> on<event> attribute is used to attach an event handler to the specified element. It takes a string value which is the name of the function to be executed when the event occurs. The function can be an anonymous function or a named function. The event type can be any valid event type like 'click', 'mouseover', 'mouseout', 'keydown', 'keyup', etc. The function can take an event object as an argument which contains information about the event that occurred. The event object has properties like target, type, currentTarget, etc. The target property returns the element that triggered the event. The type property returns the type of the event that occurred. The currentTarget property returns the element that the event handler is attached to.
//  - Callback Functions -> A callback function is a function that is passed as an argument to another function and is executed when the event occurs. The callback function can be an anonymous function or a named function. The callback function can take an event object as an argument which contains information about the event that occurred. The event object has properties like target, type, currentTarget, etc. The target property returns the element that triggered the event. The type property returns the type of the event that occurred. The currentTarget property returns the element that the callback function is attached to.
// Modification -> textContent, innerHTML, innerText, style, classList

// Asynchronous interactivity -> setTimeout(), setInterval(), clearTimeout(), clearInterval().

// custom events -> Custom events are events that are created by the developer and can be triggered manually. They can be used to create custom functionality and interactivity in the application. Custom events can be created using the CustomEvent constructor and can be dispatched using the dispatchEvent() method. The CustomEvent constructor takes two arguments, the first argument is the name of the event and the second argument is an object that contains additional information about the event. The dispatchEvent() method is used to trigger the custom event on the specified element. The custom event can be listened to using the addEventListener() method just like any other event.
