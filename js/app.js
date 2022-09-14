'use strict';

let user = prompt('Hello! What is your name?');

alert(`Hi ${user}, welcome to my site!`);

const button = document.querySelectorAll('button');

button.forEach(button =>
  button.addEventListener('click', () => {
    //initialize score variable
    let score = 0;
    // question 1
    let book = prompt('Was my favorite recent book called Babel?').toLowerCase();
    if (book === 'yes' || book === 'y') {
      alert('Correct!');
      score++;
    }
    else { alert('I\'m afraid that\'s not right.'); } //Instructor said that using backticks for strings was ok so I'm ignoring this error here and subsequently
    //question 2
    let location = prompt('Am I currently located in Brazil?').toLowerCase();
    if (location === 'no' || location === 'n') {
      alert('Correct!');
      score++;
    }
    else { alert('I\'m afraid that\'s not right.'); }

    //question 3
    let peru = prompt('Have I ever been to Peru?').toLowerCase();
    if (peru === 'yes' || peru === 'y') {
      alert('Correct!');
      score++;
    }
    else { alert('I\'m afraid that\'s not right.'); }

    //question 4
    let army = prompt('Was I in the Army?').toLowerCase();
    if (army === 'no' || army === 'n') {
      alert('That\'s right, I was in the Navy!');
      score++;
    }
    else { alert('I\'m afraid that\'s not right.'); }

    //question 5
    let mechanic = prompt('Was I a mechanic in the Navy?').toLowerCase();
    if (mechanic === 'no' || mechanic === 'n') {
      alert('That\'s right, I was an Electronics Technician!');
      score++;
    }
    else { alert('I\'m afraid that\'s not right.'); }

    // question 6
    const magicNum = 42;
    let numGuesses = 0;
    let guess = 0;
    while (numGuesses < 4 && guess !== magicNum) {
      guess = parseInt(prompt('Guess the magic number!'));
      if (guess > magicNum) {
        alert('Too high!');
        numGuesses++;
        alert(`You have ${4 - numGuesses} guesses left.`);
      }
      else if (guess < magicNum) {
        alert('Too low!');
        numGuesses++;
        alert(`You have ${4 - numGuesses} guesses left.`);
      }
      else if (guess === magicNum) {
        alert('You got it!');
        score++;
      }
    }
    if (guess !== magicNum) {
      alert(`The magic number was ${magicNum}, better luck next time!`);
    }

    //question 7

    const bookList = ['Babel',
      'Magdalena, River of Dreams',
      'Algorithms to live by',
      'The Murderbot Diaries Novellas',
      'United States of Japan',
      'The Blacktongue Thief',
      'Termination Shock',
      'The Cold Millions',
      'The Terra Ignota Series',
      'The Fractured Europe Sequence'];
    const bookListLower = [];
    bookList.forEach(book => {
      bookListLower.push(book.toLowerCase());
    });

    let numTrys = 0;
    let correct = false;

    while (numTrys < 6 && correct === false) {
      let bookGuess = prompt('Try to guess one of the books in my top 10.').toLowerCase();
      for (let i = 0; i < bookListLower.length; i++) {
        if (bookListLower[i].toLowerCase() === bookGuess) {
          alert(`Wow! You got one! The whole list was ${bookList}.`);
          correct = true;
          score++;
          break;
        }
      }
      numTrys++;
      if (correct === false) {
        alert(`Sorry, that was not on the list. You have ${6 - numTrys} left. Please try again.`);
      }
    }
    if (correct === false) {
      alert(`Sorry you couldn't get one right :/ The whole list was ${bookList}.`);
    }

    // final message
    alert(`Thanks for taking my quiz, ${user}. Your score was ${score} out of 7! Have a nice day!`);
  }
  )
);





// What I would do if we could use functions

// creates quiz function

// function quiz() {
//   //question 1
//   let book =  prompt('Was my favorite recent book called Babel?').toLowerCase();
//   if (book === 'yes' || book === 'y') {
//     alert('Correct!'); }
//   else { alert(`I'm afraid that's not right.`); }

//   //question 2
//   let location = prompt('Am I currently located in Brazil?').toLowerCase();
//   if (location === 'no' || location === 'n') {
//     alert('Correct!'); }
//   else { alert(`I'm afraid that is incorrect.`); }

//   //question 3
//   let peru =  prompt('Have I ever been to Peru?').toLowerCase();
//   if (peru === 'yes' || peru === 'y') {
//     alert('Correct!'); }
//   else { alert(`I'm afraid that's not right.`); }

//   //question 4
//   let army = prompt('Was I in the Army?').toLowerCase();
//   if (army === 'no' || army === 'n') {
//     alert(`That's right, I was in the Navy!`); }
//   else { alert(`I'm afraid that is incorrect.`); }

//   //question 5
//   let mechanic = prompt('Was I a mechanic in the Navy?').toLowerCase();
//   if (mechanic === 'no' || mechanic === 'n') {
//     alert(`That's right, I was an Electronics Technician!`); }
//   else { alert(`I'm afraid that is incorrect.`); }
