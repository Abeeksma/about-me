'use strict';
//silly prompt question bs
var programmer = prompt(' What is your name? ');
var how = prompt(' How are you?');
var favColor = prompt(' What is your favorite color?');
var something = prompt(' What is the meaning to life the universe and everything?');
alert('Hello ' + programmer + ' who feels ' + how + ' liking ' + favColor + '. Thinking ' + something);

console.log('What is your name?', programmer);
console.log('How are you?', how);
console.log('What is your favorite color?', favColor);
console.log('What is the meaning to life the universe and everything?', something);

//quiz shit//

//1
var firstResponse =prompt('Am I from Wisconsin?');
console.log(firstResponse);
if(firstResponse.toLowerCase() === 'yes' || firstResponse.toLowerCase() === 'y') {
  alert('Huzzah, that is correct');
}
else if(firstResponse.toLowerCase() === 'no' || firstResponse.toLowerCase() === 'n') {
  alert('You have failed me!');
}

//2
var secondResponse =prompt('Do I like Pantera?');
console.log(secondResponse);
if(secondResponse.toLowerCase() === 'yes' || secondResponse.toLowerCase() === 'y') {
  alert('Huzzah, you got another. I bet you feel sooooo pleased');
}
else if(secondResponse.toLowerCase() === 'no' || secondResponse.toLowerCase() === 'n') {
  alert('You have no understanding of Pantera or life');
}

//3
var thirdResponse =prompt('Am I sick of questions about me?');
console.log(thirdResponse);
if(thirdResponse.toLowerCase() === 'yes' || thirdResponse.toLowerCase() === 'y') {
  alert('Go you! I tire of it...');
}
else if(thirdResponse.toLowerCase() === 'no' || thirdResponse.toLowerCase() === 'n') {
  alert('failure');
}

//4
var fourthResponse =prompt('Have I been to Sweden?');
console.log(fourthResponse);
if(fourthResponse.toLowerCase() === 'yes' || fourthResponse.toLowerCase() === 'y') {
  alert('I wish you were right');
}
else if(fourthResponse.toLowerCase() === 'no' || fourthResponse.toLowerCase() === 'n') {
  alert('Unfortunately you are correct...someday I will go');
}

//5
var fifthResponse =prompt('Has my band released multiple albums?');
console.log(fifthResponse);
if(fifthResponse.toLowerCase() === 'yes' || fifthResponse.toLowerCase() === 'y') {
  alert('Be patient, we are working on it');
}
else if(fifthResponse.toLowerCase() === 'no' || fifthResponse.toLowerCase() === 'n') {
  alert('Correct, we have one self released album. We are working on the second!');
}