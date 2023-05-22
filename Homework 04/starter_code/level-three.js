/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');



function addPoints20() {
    score = score + 20;
    if( score <= 100 ) {
      scoreEl.innerText = score;
    } else {
      declareWinner();
    }
  }

  function addPoints5(){
    score = score + 5;
    if (score <= 100 ) {
        scoreEl.innerText = score;
    } else {
        declareWinner();
        }
    }

    function addPoints10(){
        score = score + 10;
        if (score <= 100 ) {
            scoreEl.innerText = score;
        } else {
            declareWinner();
            }
        }

    function declareWinner(){
        document.body.classList.add('game-over');
        }



document.querySelector(`.js-ball[data-increment="20"]`).addEventListener('click', addPoints20);

document.querySelector(`.js-ball[data-increment="5"]`).addEventListener('click', addPoints5);

document.querySelector(`.js-ball[data-increment="10"]`).addEventListener('click', addPoints10);


