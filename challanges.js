

var scores, activePlayer, roundScore, gamePlaying;

init();

var lastDice ;

function init () {
    scores = [ 0, 0 ];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active'); 
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    

    document.querySelector('.dice').style.display = 'none'
}

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active'); 

        document.querySelector('.dice').style.display = 'none'
}


document.querySelector('.btn-roll').addEventListener('click' , function(){
    if (gamePlaying){
        var dice = Math.floor(Math.random()*6)+1;
        

        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        document.querySelector('.dice').style.display = 'block  ';
        if(dice===6 && lastDice===6){
            
            roundScore = 0;
            scores[activePlayer]= 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();

        } else if (dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
        nextPlayer();
        }    
       
        lastDice = dice;
    }
    
});

document.querySelector('.btn-hold').addEventListener('click' , function(){

    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        

        if(scores[activePlayer] >= 100){
                document.querySelector('#name-' + activePlayer).textContent = 'Winner';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
        } else {nextPlayer();}
    }

})

document.querySelector('.btn-new').addEventListener('click' , init);



