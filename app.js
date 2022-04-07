// Toglogchiin eeljiig hadgalah huwisagch(player1 = 0, player 2= 1,)
var activePlayer = 0;

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

// shoog shideh eventListener

document.querySelector(".btn-roll").addEventListener("click", function(){
    // 1-6 hurtel sanamsargui toog gargaj awna
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

        // ene playeriin tsugluulsan onoog 0 bolgoh
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent =0;

        // player eeljiig ngoo player luu shiljuuleh


    //  herew active player ni 0 bwal activePlayer iig 1 bolgo
    // ugui bol activePlayer iig 0 bolgo
        activePlayer ===0 ? activePlayer =1 : activePlayer = 0
        // if(activePlayer ===0){
        //     //     activePlayer = 1;
        //     // }else{
        //     //     activePlayer = 0;
        //     // }
        

        // ulaantsegiig shiljuulne
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");

        // shoog tur alga bolgoh
        diceDom.style.display = "none";

    }
});





