//quiz shit and fucking prying nonsense//
var correctPoints = 0;
var incorrectPoints = 0;

//function to run all questions after onload even in html script *************************

function askquestion() {

  yesNoQuestions('Am I from Wisconsin?', 'yes', 'Huzzah, that is correct', 'You have failed me!');
  yesNoQuestions('Do I like Pantera', 'yes', 'Huzzah, you got another. I bet you feel soooooo pleased.', 'You have no understanding of Pantera or life.');
  yesNoQuestions('Am I sick of questions about me', 'yes', 'Go you! I tire of it...', 'Failure');
  yesNoQuestions('Have I been to Sweden', 'no', 'Unfortunately you are correct. Someday I hope to go', 'I wish that was correct');
  yesNoQuestions('Has my band released multiple albums?', 'no', 'Correct, we have one self released album and are working on a second.', 'Be patient, we are working on it.');

  var tries = 0;

  while(tries < 5) {
    var userGuess = prompt('How many siblings do I have? ' + 'You have 4 attempts to guess.');
    if(userGuess === '7') {
      tries = 5;
      correctPoints++;
      alert('That is correct. I have 2 older brothers and 5 younger sisters.');
    }
    else if(userGuess > 7) {
      tries = tries + 1;
      incorrectPoints++;
      alert('Your guess was too high!');
    }


    else if(userGuess < 7) {
      tries = tries + 1;
      incorrectPoints++;
      alert('Your guess was too low!');

    }
  }

  //7th question, array with multiple correct answers up to 7 attempts//

  var fuckIt = ['wisconsin', 'iowa', 'arizona'];
  var tryIt = 6;

  for(var i = 0; i <= tryIt; i++) {
    var numberSeven = prompt('What is one of the states that I have I lived in?');
    if(numberSeven === fuckIt [0]) {
      alert('Huuufuckingraw!!');
      correctPoints++;
      break;
    }
    if(numberSeven === fuckIt [1]) {
      alert('Oh boy aren\'t you just so smart');
      correctPoints++;
      break;
    }
    if(numberSeven === fuckIt [2]) {
      alert('Fuck yeah!');
      correctPoints++;
      break;
    }
    else {
      alert('Dead wrong doofus!');
      incorrectPoints++;
    }
  }
  alert('All tries consumed, the correct answers were ' + fuckIt[0] + ' ' + fuckIt[1] + ' ' + fuckIt[2] + ' ');
  alert('You got ' + correctPoints + ' correct and answered incorrectly ' + incorrectPoints + ' time(s). Don\'t you feel like a special little snowflake?');
}

//function to make yes no questions work **************************************************

function yesNoQuestions(questionPrompt, correctAnswer, correctAlert, incorrectAlert) {
  var promptResponse = prompt(questionPrompt).toLowerCase();
  if (promptResponse !== 'yes' && promptResponse !== 'y' && promptResponse !== 'no' && promptResponse !== 'n') {
    alert('Please enter a Yes or No answer.');
  }
  else if (correctAnswer === 'yes' && (promptResponse === 'y' || promptResponse === 'yes')) {
    alert(correctAlert);
    correctPoints++;
  }
  else if(correctAnswer === 'no' && (promptResponse === 'no' || promptResponse === 'n')) {
    alert(correctAlert);
    correctPoints++;
  }
  else {
    alert(incorrectAlert);
    incorrectPoints++;
  }
}
