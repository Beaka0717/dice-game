// Toglogchiin eeljiig hadgalah huwisagch(player1 = 0, player 2= 1,)
var activePlayer = 1;

// toglogchdin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//Eeljiin onoog tsugluulah huwisagch( shoo ni 1 buuwal awsan onoog ni 0lono)
var roundScore = 0;
//shoonii ali talaara buusniig hadgalah huwisagch(1-6 gsn utgiig ene huwisagchid sanamsarguiger uusgej ogno.)


// togloom ehlehed beldi
document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;

document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;

  var diceDom = document.querySelector(".dice");
  diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random()*6)+1;
    
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png"
});





