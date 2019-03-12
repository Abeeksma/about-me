'use strict';
var programmer = prompt(' What is your name? ');
var how = prompt(' How are you?');
var favColor = prompt(' What is your favorite color?');
var something = prompt(' What is the meaning to life the universe and everything?');
alert('Hello ' + programmer + ' who feels ' + how + ' liking ' + favColor + '. Thinking ' + something);

console.log('What is your name?', programmer);
console.log('How are you?', how);
console.log('What is your favorite color?', favColor);
console.log('What is the meaning to life the universe and everything?', something);

//quiz shit
//1
var firstResponse =prompt('Am I from Wisconsin?');
if(firstResponse === 'yes' || firstResponse === 'y') {
  alert('Huzzah, that is correct');
}
else if(firstResponse === 'no' || firstResponse === 'n'); {
  alert('You have failed me!');
}

//2
var secondResponse =prompt('Do I like Pantera?');
if(secondResponse === 'yes' || secondResponse === 'y') {
  alert('Huzzah, you got another. I bet you feel sooooo pleased');
}
else if(secondResponse === 'no' || secondResponse === 'n') {
  alert('HA! You have no understanding of Pantera do you!');
}

//3
var thirdResponse =prompt('Am I sick of questions about me?');
if(thirdResponse === 'yes' || thirdResponse === 'y') {
  alert('Go you! I tire of it...');
}
else if(thirdResponse === 'no' || thirdResponse === 'n') {
  alert('')
}