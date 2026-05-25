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

// helper.js


  
function primeFactors(n) {
    function isPrime(a){
        // let flag = true;
        for (let i = 2; i*i<= a ; i++){
            if(a%i == 0) return false;
        }
        return true;
    }
    if (n ==0 || n==1) return "No prime factors";
    if (isPrime(n)) return n;
    // write your code here
    let temp = n;
    let i = 2;
    let ans = "";
    while(i <= temp){
        if(isPrime(i) && temp%i ==0){
            console.log("temp: "+ temp);
            console.log("i: "+ i);
            ans +=i +" ";
            temp /= i;
            console.log("temp after division: "+ temp);
            // temp % i != 0 ? i++ : i ;
        }else{
            console.log("i: "+ i);
            i++;
        }  
    }
    // ans = ans.split; 
    return ans;
    
}
    let n = parseInt(prompt("Enter a number: "));
    console.log(primeFactors(n));