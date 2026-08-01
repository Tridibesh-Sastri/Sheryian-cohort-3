// setInterval(() => {
//     console.log('Hello,..........');
// }, 3000);


const nav = document.querySelector('nav');
const addbtn = document.querySelector('#addBtn');
const main = document.querySelector('main');
const box = document.querySelector('.box');
const innerBox = document.querySelector('.innerBox');
const startBtn = document.querySelector('#startBtn');

let btn_count = 0;

let s = `<button type="button" id="btn${btn_count}">${btn_count}</button>`

addbtn.addEventListener('click',()=>{
    btn_count++;
    const newBtn = document.createElement('button');
    newBtn.setAttribute('id',`btn${btn_count}`);
    newBtn.textContent = btn_count;
    nav.appendChild(newBtn);

})



nav.addEventListener('click',(e)=>{
    console.log(e.target.id);
    let btnNumber = e.target.innerHTML;
    if(e.target.tagName === 'BUTTON'){
        e.target.style.backgroundColor = 'red';
        let countdown = 5;
        const intervalID = setInterval(() => {

            console.log(countdown);

            e.target.innerHTML = `${btnNumber} <span style="
            display: inline-block;
            height : 12px; 
            width: 12px; 
            border-radius: 50%;
            background-color: white; 
            color: black; 
            text-align: center;

            font-size: 8px;">${countdown}</span>`;

            if(countdown === 1){
                e.target.remove();
                btn_count--;
                clearInterval(intervalID);
            }
            countdown--;

        },1000);
        // e.target.remove();

        // setTimeout(() => {
        //     // console.log('Button will be removed after 3 seconds')
            
        //     e.target.remove();
        // }, 3000);
    }

    
})




startBtn.addEventListener('click',()=>{
    let boxH = box.clientHeight;
    let boxW = box.clientWidth;
    let innerBoxH = innerBox.clientHeight;
    let innerBoxW = innerBox.clientWidth;
    innerBox.style.top = `${Math.floor(Math.random() * (100 - (innerBoxH / boxH * 100)))}%`;
    innerBox.style.left = `${Math.floor(Math.random() * (100 - (innerBoxW / boxW * 100)))}%`;
})


