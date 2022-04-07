//  Global huwisagchuud use for everywhere

// shows which player is playing
var activePlayer = 0;
// total scores
var scores = [0, 0];
// score that is active player is collecting
var roundScore = 0;

// save and search img from DOM
var diceDom = document.querySelector(".dice");

// sterting game
initGame();

//   preparing to new start
function initGame(){

    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    
    document.getElementById("score-0").textContent=0;
    document.getElementById("score-1").textContent=0;
    
    document.getElementById("current-0").textContent=0;
    document.getElementById("current-1").textContent=0;

    // player nameiig butsaaj gargah when new game starts
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');

    diceDom.style.display = "none";
    }


// Dice shideh eventListener

document.querySelector(".btn-roll").addEventListener("click", function(){
    // get random numbers from (1-6)
    var diceNumber = Math.floor(Math.random()*6)+1;
    // shooni zurgiig event deer gargaj irne
    diceDom.style.display = "block";
    // buusan sanamsargui toond hargalzah shooni zurgiig web deer garagj irne
    diceDom.src = "dice-" + diceNumber + ".png"

    // Buusan too ni negees ylaggati bh toglogchiin eeljin onoog nemegduulne
    if(diceNumber !==1){
        // 1a yalgaatai too buusan tul buusan onoog toglogchid nemj ogno
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else {
        // 1 buusan tul toglogchiin eeljig solij ogno

        switchToNextPlayer();
        
    // << herew active player ni 0 bwal activePlayer iig 1 bolgo
    // << ugui bol activePlayer iig 0 bolgo
    //     activePlayer ===0 ? activePlayer =1 : activePlayer = 0
    //      if(activePlayer ===0){
    //         activePlayer = 1;
    //      }else{
    //      activePlayer = 0;
    //         }
        }
});
// hold btn eventListener
document.querySelector(".btn-hold").addEventListener("click",function(){
    // playeriin tsugluulsan onoog glabal onoon deer ni nemeh
    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    // ug player hojson esehiig shalgah
    if(scores[activePlayer] >= 100){
        // winner gsn textiig nerniiih ni orond gargana
        document.getElementById("name-" + activePlayer).textContent = "WINNER!";
        document.querySelector(".player-" +activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" +activePlayer + "-panel").classList.remove("active");
        
    }else{
        
        switchToNextPlayer();
    
    }
   

    // delgets deer onoog ni oorchlono
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
    // eeljiin onoog ni 0lono
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent='0';
    
    // toglogchin eeljiig solino
    // ene playeriin tsugluulsan onoog 0 bolgoh
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent =0;

        // player eeljiig ngoo player luu shiljuuleh
        

});

function switchToNextPlayer(){
    
    // toglogchin eeljiig solino
    // ene playeriin tsugluulsan onoog 0 bolgoh
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent =0;

    // player eeljiig ngoo player luu shiljuuleh

    
//  herew active player ni 0 bwal activePlayer iig 1 bolgo
// ugui bol activePlayer iig 0 bolgo
    activePlayer ===0 ? activePlayer =1 : activePlayer = 0
    
    // red spot goes to active player 
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
   
    // dice disapears for short time
    diceDom.style.display = "none";
    
}

// new game eventListener
document.querySelector(".btn-new").addEventListener("click" , initGame);




