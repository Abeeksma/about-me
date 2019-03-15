'use strict';
//silly prompt question bs//
var programmer = prompt(' What is your name? ');
var how = prompt(' How are you?');
var favColor = prompt(' What is your favorite color?');
var something = prompt(' What is the meaning to life the universe and everything?');
alert('Hello ' + programmer + ' who feels ' + how + ' liking ' + favColor + '. Thinking ' + something);

console.log('What is your name?', programmer);
console.log('How are you?', how);
console.log('What is your favorite color?', favColor);
console.log('What is the meaning to life the universe and everything?', something);

//quiz shit and fucking prying nonsense//
var correctAnswers = 0;
var incorrectAnswers = 0;

//1//
var firstResponse =prompt('Am I from Wisconsin?');
console.log(firstResponse);
if(firstResponse.toLowerCase() === 'yes' || firstResponse.toLowerCase() === 'y') {
  alert('Huzzah, that is correct');
  correctAnswers++;
}
else if(firstResponse.toLowerCase() === 'no' || firstResponse.toLowerCase() === 'n') {
  alert('You have failed me!');
  incorrectAnswers++;
}

//2//
var secondResponse =prompt('Do I like Pantera?');
console.log(secondResponse);
if(secondResponse.toLowerCase() === 'yes' || secondResponse.toLowerCase() === 'y') {
  alert('Huzzah, you got another. I bet you feel sooooo pleased');
  correctAnswers++;
}
else if(secondResponse.toLowerCase() === 'no' || secondResponse.toLowerCase() === 'n') {
  alert('You have no understanding of Pantera or life');
  incorrectAnswers++;
}

//3//
var thirdResponse =prompt('Am I sick of questions about me?');
console.log(thirdResponse);
if(thirdResponse.toLowerCase() === 'yes' || thirdResponse.toLowerCase() === 'y') {
  alert('Go you! I tire of it...');
  correctAnswers++;
}
else if(thirdResponse.toLowerCase() === 'no' || thirdResponse.toLowerCase() === 'n') {
  alert('failure');
  incorrectAnswers++;
}

//4//
var fourthResponse =prompt('Have I been to Sweden?');
console.log(fourthResponse);
if(fourthResponse.toLowerCase() === 'yes' || fourthResponse.toLowerCase() === 'y') {
  alert('I wish you were right');
  incorrectAnswers++;
}
else if(fourthResponse.toLowerCase() === 'no' || fourthResponse.toLowerCase() === 'n') {
  alert('Unfortunately you are correct...someday I will go');
  correctAnswers++;
}

//5//
var fifthResponse =prompt('Has my band released multiple albums?');
console.log(fifthResponse);
if(fifthResponse.toLowerCase() === 'yes' || fifthResponse.toLowerCase() === 'y') {
  alert('Be patient, we are working on it');
  incorrectAnswers++;
}
else if(fifthResponse.toLowerCase() === 'no' || fifthResponse.toLowerCase() === 'n') {
  alert('Correct, we have one self released album. We are working on the second!');
  correctAnswers++;
}

//6th question prompt for numerical input, tell wether higher or lower, 4 attempts//
var tries = 0;

while(tries !== 4){
  var userGuess = prompt('How many siblings do I have? ' + 'You have 4 attempts to guess.');

  if(userGuess === 7) {
    alert('That is correct. I have 2 older brothers and 5 younger sisters.');
    tries = 4;
    correctAnswers++;
  }
  else if(userGuess > 7) {
    alert('Your guess was too high!');
    tries =tries + 1;
    incorrectAnswers++;
  }
  else if(userGuess < 7) {
    alert('Your guess was too low!');
    tries =tries + 1;
    incorrectAnswers++;
  }
}

//7th question, array with multiple correct answers up to 7 attempts//

var fuckIt = ['wisconsin', 'iowa', 'arizona'];
var tryIt = 6;

for(var i = 0; i <= tryIt; i++) {
  var numberSeven = prompt('What is one of the states that I have I lived in?');
  if(numberSeven === fuckIt [0]) {
    alert('Huuufuckingraw!!');
    correctAnswers++;
    break;
  }
  if(numberSeven === fuckIt [1]) {
    alert('Oh boy aren\'t you just so smart');
    correctAnswers++;
    break;
  }
  if(numberSeven === fuckIt [2]) {
    alert('Fuck yeah!');
    correctAnswers++;
    break;
  }
  else {
    alert('Dead wrong doofus!');
    incorrectAnswers++;
  }
}
alert('All tries consumed, the correct answers were ' + fuckIt[0] + ' ' + fuckIt[1] + ' ' + fuckIt[2] + ' ');
alert('You got ' + correctAnswers + ' correct and answered incorrectly ' + incorrectAnswers + ' time(s). Don\'t you feel like a special little snowflake?');
