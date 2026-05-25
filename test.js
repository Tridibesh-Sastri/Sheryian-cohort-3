// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Who are you? ', name => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

// const readline = require('readline').createInterface({
//   input: process.stdin, 
//   output: process.stdout
// });
// const name = await readline.question('Name? ');
// readline.close();

// readline.question('Who are you? ', name => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });
let prompt = require('prompt-sync')();
console.log("I'm Connected");
console.log()


function isSquare1(a){
  if (a<0) return "No";
  return (Math.sqrt(a))%1 ===0 ? "Yes":"No";
}

function isSquare2(a) {
  a= Number(a);
  if (a<0) return "No";
  console.log(`${a} is ${typeof(a)}`);
  let root = Math.sqrt(a);
  let temp = root*root;
  console.log(`${temp} is ${typeof(temp)}`);

  if (Math.pow(Math.floor(root),2) === a) {
    return "Yes";
  }
  else{
    return "No last";
  }
}

function isSquare2_1(a) {
  a = Number(a);
  if (a<0) return "No first";
  console.log(`${a} is ${typeof(a)}`);
  let root = Math.sqrt(a);
  root = Math.floor(root);
  let temp = root*root
  console.log(`${temp} is ${typeof(temp)}`);
  console.log(`${temp === a}`);
  
  
  if (root*root === a) {
    return "Yes";
  }
  else{
    return "No last";
  }
}

function isSquare3(a){
  a = Number(a);
  if (n<0) return "No";
  let root = Math.floor( Math.sqrt(a));
  return (root*root === a)?"Yes":"No";
}



let n = prompt("Enter a Number ");
console.log(isSquare1(n));
console.log("1 tested")
isSquare2_1(n);
console.log(isSquare2_1(n));
console.log("2_1 tested")
isSquare2(n);
console.log(isSquare2(n));
console.log("2 tested")
console.log(isSquare3(n));
console.log("3 tested")


let pal = prompt("Enter a Palindrome: ");

function isPalindrome(p){
  let flag = true;
  let l = p.length;
  console.log(l);
  for (let i = 0; i < l ; i++){
    console.log(`${p[i]} and ${p[l-1-i]}`);
    if (p[i] != p[l - 1 -i]) {
      flag = false;
      break;
    } 
  }
  if (flag) return `${p} is palindrome`;
  return `${p} is not palindrome`;
}
console.log(isPalindrome(pal));

function printNumbers(n) {
   //Write your code here
   let pattern = "";
   for(let i = n; i> 0; i--){
      if (i==1){
         pattern +=i;
      }else{
         pattern += i + " ";
      }
   }

   return pattern;
}
let   num  = prompt();
console.log(printNumbers(num));

function sumEvenOddInRange(start, end) {
    start = Number(start);
    end = Number(end);
    // Write your logic here
    let ans = [0,0];
    // let even = 0;
    // let odd = 0;
    for(let i = start; i<= end; i++){
      // console.log(i);
      // console.log(i%2 == 0);
      // console.log (ans[0] += i);
        if(i%2 == 0){  
          // even += i;
            ans[0] += i;
        }else{
            // odd+=i;
            ans[1] += i;
        }
        // console.log(even);
        // console.log(odd);
      }

      return ans
}
// console.log(sumEvenOddInRange(n,num));
console.log(sumEvenOddInRange(1,5));


function isPrime(n) {
    // Write your logic here
    n = Number(n);
    let range = n/2;
    let ans = "Not Prime";
    for(let i =2; i<= range; i++){
        if(n%2 === 0){
            ans = "Prime";
            break
            }else{
                range = n/i;
            };
    }
    console.log(ans)
}

isPrime(7);