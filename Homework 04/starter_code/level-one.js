/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');


// Add 10 to score everytime the ball is clicked

function addPoints() {
  score = score + 10;
  if( score <= 100 ) {
    scoreEl.innerText = score;
  } else {
    declareWinner();
  }
}

// Listen for clicking on a ball

ballEl.addEventListener('click', addPoints);


// Display the score on the HTML





// Declare Winner

function declareWinner(){
  document.body.classList.add('game-over');
}

