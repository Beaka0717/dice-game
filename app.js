// Toglogchiin eeljiig hadgalah huwisagch(player1 = 0, player 2= 1,)
var activePlayer = 1;

// toglogchdin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//Eeljiin onoog tsugluulah huwisagch( shoo ni 1 buuwal awsan onoog ni 0lono)
var roundScore = 0;
//shoonii ali talaara buusniig hadgalah huwisagch(1-6 gsn utgiig ene huwisagchid sanamsarguiger uusgej ogno.)
var dice = Math.floor(Math.random()*6)+1;
// togloom ehlehed beldi
document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;
document.querySelector(".dice").style.display = "none";

console.log("Dice :" + dice);


