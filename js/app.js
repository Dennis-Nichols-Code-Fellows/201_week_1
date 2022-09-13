const button = document.querySelectorAll('button');

button.forEach(button =>
  button.addEventListener('click', () =>
  {//question 1
    let book =  prompt('Was my favorite recent book called Babel?').toLowerCase();
    if (book === 'yes' || book === 'y') {
      alert('Correct!'); }
    else { alert(`I'm afraid that's not right.`); } //Instructor said that using backticks for strings was ok so I'm ignoring this error here and subsequently

    //question 2
    let location = prompt('Am I currently located in Brazil?').toLowerCase();
    if (location === 'no' || location === 'n') {
      alert('Correct!'); }
    else { alert(`I'm afraid that is incorrect.`); }

    //question 3
    let peru =  prompt('Have I ever been to Peru?').toLowerCase();
    if (peru === 'yes' || peru === 'y') {
      alert('Correct!'); }
    else { alert(`I'm afraid that's not right.`); }

    //question 4
    let army = prompt('Was I in the Army?').toLowerCase();
    if (army === 'no' || army === 'n') {
      alert(`That's right, I was in the Navy!`); }
    else { alert(`I'm afraid that is incorrect.`); }

    //question 5
    let mechanic = prompt('Was I a mechanic in the Navy?').toLowerCase();
    if (mechanic === 'no' || mechanic === 'n') {
      alert(`That's right, I was an Electronics Technician!`); }
    else { alert(`I'm afraid that is incorrect.`); }

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
