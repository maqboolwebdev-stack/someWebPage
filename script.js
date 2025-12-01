

// Q1.
// let name = prompt("Apna naam batao:");
// let h1 = document.createElement('h1');
// if (name) {
//   h1.textContent = `Hello, ${name}! Welcome to the JavaScript world.`;
//   document.body.appendChild(h1);
// }


// Q2.
// function add(a, b) {
//   return a + b;
// };

// let result = add(Number(prompt('enter phela number')), Number(prompt('dossra number')));
// console.log(result);

// Q3.
// let age = prompt('How old are you?');

// if(age < 18) {
//   console.log('you are miner');
// } else{
//   console.log('you are adult');
// };

// Q4.
// for(let i = 1; i <= 5; i++){
//   console.log(i);
// };

// Q5.
// function greet(){
//   console.log('Hello waqas');
// };

// greet();

// Q6.
// let askSqure = Number(prompt('Enter a number and get Squre of it'));
  
// function squre() {
//   return askSqure * askSqure;
// };

// console.log(`youre number is ${askSqure} and its squre is = `, squre());

// Q7.
// let userNum = Number(prompt('Enter any random Number i print odd or even base on your eterd number'));

// if(userNum % 2 === 0){
//   console.log(`${userNum} is Even`);
// } else {
//   console.log(`${userNum} is Odd`);
// };

// Q8.
// let userFirstName = prompt('Enter your first name');
// let userLastName = prompt('Enter your last name');

// console.log(`${userFirstName} ${userLastName}`);

// Q9.
// for(let i = 10; i >= 1; i--){
//   console.log(i);
// };

// Q10.

// let askNum = Number(prompt('Enter a number i will print 2X of it'));

// function double() {
//   return askNum * 2;
// };

// console.log(double());


// Q11.
// let firstNum = Number(prompt('Enter first Num'));
// let secNum = Number(prompt('Enter second Num'));
// console.log(Math.max(firstNum, secNum));

// if(firstNum > secNum) {
//   console.log(firstNum);
// } else {
//   console.log(secNum);
// };

// Q12.
// let num1 = Number(prompt('Enter first num'));
// let oprater = prompt('e.g +, -, *, /');
// let num2 = Number(prompt('Enter second num'));
// let result;
// if(oprater === '+'){result = num1 + num2;}
// else if(oprater === '-'){result = num1 - num2;}
// else if(oprater === '/'){result = num1 / num2;}
// else if(oprater === '*'){result = num1 * num2;}
// else{
//   result = 'invalid opreater';
// }

// console.log(`${num1} ${oprater} ${num2} = ${result}`);

// Q13.
// for(let i = 1; i <= 20; i++){
//   if(i % 2 === 0){
//     console.log(`this is also ${i} is odd `);
//   }
// };

// Q14.
// let fruits = ["apple", "banana", "mango"];

// fruits.splice(1,1);
// console.log(fruits);

// Q15.

// let name = prompt('Enter you name');
// function greetUser(name) {
//    console.log(`Hello ${name}, welcome!`);
// };

// greetUser(name);

// Q16.
// let sum = 0;
// for(let i = 1; i<= 10; i++){
//   sum += i;
//   console.log(sum);
// };
// console.log('Total sum', sum);

// Q17.
// let items = ["pen", "pencil"];
// let userItem = items.push(prompt('Enter your item'));

// console.log(items);

// Q18.
// let userChoiceNum = Number(prompt('Enter any number i will give you table of your number'));

// for(let i = 1; i <= 10; i++){
//   console.log(`${userChoiceNum} x ${i} = ${userChoiceNum * i}`);
// };

// Q19.
// let C = Number(prompt('Enter C temperature and get F'));

// function temperature(C){
//   let F = C * 1.8 + 32
//   console.log(`${F}F`);

// };

// temperature(C);

// Q20.
// let password = prompt('Enter a strong Password');

// if(password.length < 8){
//   console.log('Pasword too short');
// } else {
//   console.log('Password accepted');
// };

// Q21.
// let word = prompt('Enter a word and i will give you how much vowels in your given word');

// let vowels = 'aeiouAEIOU';
// let count = 0;

// for(let i = 0; i < word.length; i++){
//   if(vowels.includes(word[i])){
//     console.log(word[i]);
//     count++;
//   }
// };
// console.log(`Total vowels: ${count}`);

// Q22.
// let firstNum = Number(prompt('Enter first number'));
// let secondNum = Number(prompt('Enter second number'));
// let thirdNum = Number(prompt('Enter third number'));

// console.log(Math.max(firstNum,secondNum,thirdNum));

// Q23.
// let nums = [10, 20, 30, 40];
// nums.pop();
// console.log(nums);

// Q24.
// let userInput = Number(prompt('Enter a number'));

// if(userInput > 0){
//   console.log('Positive');
// } else if(userInput < 0){
//   console.log('Negative');
// } else if(userInput === 0){
//   console.log('Zero');
// }

// Q25.
// let age = Number(prompt('Enter your age'));

// function checkAge(age){
//    if(age < 18){
//     console.log('Not allowed');
//    } else{
//     console.log('Allowed');
//    }
// };

// checkAge(age);

// Q26.
// let sum = 0;
// for(let i = 1; i<= 10; i++){
//   if(i % 2 === 0){
//     sum += i;
//     console.log(sum);
//   }
// };

// Q27.
// let str = prompt('Enter an rondom word i print it reverse');
// function reverseString(str) {
//      return str.split("").reverse().join("");
//   }
//   console.log(reverseString(str)); 
  
  
  // Q28.
// let checkNumber = Number(prompt('Enter a number and see your number could be divise by 3 or 5 or both'));

// if(checkNumber % 3 === 0 && checkNumber % 5 === 0){
//   console.log('"Divisible by both"');
// } else if(checkNumber % 5 === 0){
//   console.log('"Divisible by 5"');
// } else if(checkNumber % 3 === 0){
//   console.log('"Divisible by 3"');
// } else{
//   console.log(`${checkNumber} is not "Divisible by 3 and 5"`);
// };

// Q29.
// let cities = ["Lahore", "Karachi", "Islamabad", "Faisalabad"].map(city => city.toUpperCase());

// let userInput = prompt("Enter city Name").toUpperCase();

// if (cities.includes(userInput)) {
//   console.log("City found");
// } else {
//   console.log("City not found");
// }

// Q30.
// let factorial = Number(prompt("Enter a number to get its factorial"));
// let result = 1;

// for (let i = 1; i <= factorial; i++) {
//   result *= i;
// }

// console.log(`Factorial of ${factorial} is ${result}`);

// Q31.
// let userWord = prompt("Enter a Random Word");

// let vowels = "aeiouAEIOU";
// let count = 0;
// let withoutVowels = "";

// for (let i = 0; i < userWord.length; i++) {
//   if (!vowels.includes(userWord[i])) {
//     withoutVowels += userWord[i];    
//     count++;               
//   }
// }

// console.log(`Word without vowels: ${withoutVowels}`);
// console.log(`Total characters without vowels: ${count}`);


// Q32.
// let userWord = prompt('Enter a palindrome word');

// function isPalindrome(word) {
//   let reversedWord = word.split('').reverse().join('');
//   return word === reversedWord;
// }
// console.log(isPalindrome(userWord) ? `${userWord} is a palindrome` : `${userWord} is not a palindrome`);


// Q33.
// let firstNum = Number(prompt('Enter first number'));
// let secondNum = Number(prompt('Enter second number'));
// let thirdNum = Number(prompt('Enter third number'));
// console.log(Math.min(firstNum,secondNum,thirdNum));

// Q34.
// let nums = [5, 10, 15, 20];
// nums.shift();
// console.log(nums);

// Q35.
// let userInput = prompt("Enter a number");

// function sumOfDigits(numStr) {
//   let sum = 0;
//   let expression = "";

//   for (let i = 0; i < numStr.length; i++) {
//     let digit = Number(numStr[i]);
//     sum += digit;

//     expression += numStr[i];
//     if (i < numStr.length - 1) {
//       expression += "+";
//     }
//   }
//   console.log(`${expression} = ${sum}`);
// }

// sumOfDigits(userInput);

