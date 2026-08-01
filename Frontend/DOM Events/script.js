const btn = document.querySelector("button");
const main = document.querySelector("main");
const body = document.querySelector("body");

btn.addEventListener("click", (events) => {
    console.log(btn.style.backgroundColor + " btn");
    console.log(events);
    if (btn.style.backgroundColor == 'rgb(195, 224, 246)'|| btn.style.backgroundColor == '') {
        btn.style.backgroundColor = '#f4fb7d';
        console.log("yellow");
    } else {
        btn.style.backgroundColor = '#c3e0f6';
        console.log("blue");
    }
    console.log(btn.style.backgroundColor);
    true;
},true)

body.addEventListener("click", (events) => {
    console.log(btn.style.backgroundColor + " body");
    console.log(events);
    if (btn.style.backgroundColor == 'rgb(195, 224, 246)'|| btn.style.backgroundColor == '') {
        btn.style.backgroundColor = '#f4fb7d';
        console.log("yellow");
    } else {
        btn.style.backgroundColor = '#c3e0f6';
        console.log("blue");
    }
    console.log(btn.style.backgroundColor);
    
},true)

main.addEventListener("click", (events) => {
    console.log(btn.style.backgroundColor + " main");
    console.log(events);
    if (btn.style.backgroundColor == 'rgb(195, 224, 246)'|| btn.style.backgroundColor == '') {
        btn.style.backgroundColor = '#f4fb7d';
        console.log("yellow");
    } else {
        btn.style.backgroundColor = '#c3e0f6';
        console.log("blue");
    }
    console.log(btn.style.backgroundColor);
    
},true)