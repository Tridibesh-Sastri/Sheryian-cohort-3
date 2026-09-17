// import './style.css' 
import {gsap} from 'gsap'

// selecting elements like css
 // gsap.method('element', {properties})
gsap.to(".box1",{
  x:300,
  rotation: 360,
  duration: 2,
  ease: "power2.out"
})

// selecting elements with QuerrySelector

const box2 = document.querySelector('.box2')

gsap.to(box2,{
  y:400,
  rotation: -360,
  duration: 3,
  ease: 'power2.inOut'
})

//selecting multiple elements

// method 1 using Querry Selector all for same class
// method 2 usning array 
gsap.to(['#blk1','#blk2','#blk3','#blk4'],{
  x:300,
  rotation: 360,
  duration: 2,
  delay: 2,
  ease: "power2.out",
  // stagger: -.3
  stagger: {
    each: .2,
    from: 'random'
  }
})

const count1 = { value: 0 };
const count2 = { value: 0 };


const counter1 = document.querySelector('#counter-1')
const counter2 = document.querySelector('#counter-2')
const countFlip = document.querySelector('#countFlip')



function updateCounter1() {
  if (counter1) {
    counter1.textContent = Math.round(count1.value)
  }
}

gsap.from(count1, {
  value: 100,
  duration: 10,
  ease: 'none',
  onUpdate: () => {
    updateCounter1()
  }
});


function updateCounter2() {
  if (counter2) {
    counter2.textContent = Math.round(count2.value)
  }
}

gsap.to(count2, {
  value: 100,
  duration: 10,
  ease: 'none',
  onUpdate: () => {
    updateCounter2()
  }
});

function flip (){
  // counter1.textContent = Math.round(count2.value)
  // counter2.textContent = Math.round(count1.value)
  const temp = count1.value
  count1.value = count2.value
  count2.value = temp

  updateCounter1()
  updateCounter2()
}

// countFlip.addEventListener('click', ()=>{
//   flip()
// })


//******************************** */ Timline /* *********************************//

const tl = gsap.timeline()

  tl.to('#sq1',{
    x: 400,
    width: 50,
    borderRadius: '50%',
    backgroundColor: 'red',
    duration: 1,
    ease:'power2.inOut'
  }).to('#sq1',{
    x: '+=300',
    scale: 2,
    duration: 1,
    ease:'power2.inOut'
  }).to('#sq2',{
    x: 600,
    rotate: 2*360,
    // borderRadius: '50%',
    backgroundColor: 'yellow',
    duration: 3,
    ease:'power2.inOut'
  }).from('#sq1',{
    x: 400,
    width: 50,
    borderRadius: '50%',
    backgroundColor: 'red',
    duration: 1,
    ease:'power2.inOut'
  }).to('#sq3',{
    x: 400,
    y: 300,
    width: 50,
    scaleX: 1/2,
    duration: 2,
    ease:'power2.inOut'
  },'<').to('#sq4',{
    x: 400,
    width: 50,
    borderRadius: '50%',
    backgroundColor: 'red',
    duration: 1,
    ease:'power2.inOut'
  },'-=1').from('#sq5',{
    x: 400,
    width: 50,
    borderRadius: '50%',
    backgroundColor: 'red',
    duration: 1,
    ease:'power2.inOut'
  },0)