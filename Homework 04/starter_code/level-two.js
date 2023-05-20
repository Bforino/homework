/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');


/* listen for clicking on ball one
/* listen for clicking on ball two
/* listen for clicking on ball three

/* if clicking on a ball within arena, add 10 points*/

/*Create a function add 10 points every time a ball is clicked
    if the score is equal to or above 100 points declare winner */

arenaEl.addEventListener('click', addPoints);

    

function addPoints() {
  score = score + 10;
  if( score <= 100 ) {
    scoreEl.innerText = score;
  } else {
    declareWinner();
  }
}


  /* Create function to decalre winner */

  function declareWinner(){
    document.body.classList.add('game-over');
  }