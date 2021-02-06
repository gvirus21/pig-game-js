let scores, current, roundScore, activePlayer, dice_img;
let roll_btn, hold_btn;

init();

roll_btn.addEventListener('click', function () {
    // generate random dice value
    dice = Math.floor((Math.random()) * 6) + 1;
    
    //change dice image and then make it visible
    dice_img.style.display = 'block';
    dice_img.src = 'dice-' + dice + '.png';
   
    if (dice !== 1) {
        console.log(activePlayer);
        roundScore += dice;
        document.getElementById('current--' + activePlayer).textContent = roundScore;
    }
    else {
        nextPlayer();
    }
})

hold_btn.addEventListener('click', function () {
    // Add current score to global score
    //reset current score
    scores[activePlayer] += roundScore;
    current.textContent = 0;
    roundScore = 0;
    
    // Update UI score
    document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

    // Check if player has won
    if (scores[activePlayer] >= 50) {
        document.querySelector('#name--' + activePlayer).textContent = 'WINNER!!';
        dice_img.style.display = 'none';
        document.querySelector('.player--active').classList.add('player--winner');
        document.querySelector('.player--active').classList.remove('player--active');

        document.querySelector('.btn--roll').style.display = 'none';
        document.querySelector('.btn--hold').style.display = 'none';


    } else {
        nextPlayer()
        
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current--0').textContent = 0;
        document.getElementById('current--1').textContent = 0;

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
}

new_game = document.querySelector('.btn--new');

new_game.addEventListener('click',init);

function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    current = document.getElementById('current--' + activePlayer);

    //assigning roll and hold btn.
    roll_btn = document.querySelector('.btn--roll');
    hold_btn = document.querySelector('.btn--hold');

    //selecting and hiding dice image.
    dice_img = document.querySelector('.dice');
    dice_img.style.display = 'none';

    //setting player's name
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';

    //setting global score value 0.
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;

    //setting current value 0.
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    //removing winner class
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');

    //removing active class
    document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--active')

    //making roll and hold btn visible again.
    document.querySelector('.btn--roll').style.display = 'block';
    document.querySelector('.btn--hold').style.display = 'block';

}