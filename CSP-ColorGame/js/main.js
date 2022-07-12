let aColor = ["green", "red", "blue", "yellow", "orange", "darkblue", "limegreen", "chartreuse", "aqua", "lightgreen"];
let colorInterval;
let loopTeller;
let bClicked = true;
let scoreTeller = [0, 0, 0]; // [0] = Hit  [1] = Miss  [2] = to Late
//let scoreTeller = 0;
//let shuffledaColorBK = aColor.sort((a, b) => 0.5 - Math.random());


function colorGameStart() {
    let shuffledaColorBK = aColor.sort((a, b) => 0.5 - Math.random());
    document.getElementById("colorGameBasisKleur").style.backgroundColor = aColor[0];
    if(!colorInterval) 
    {
        loopTeller=0;
        // scoreTeller = [0, 0, 0];
        // bClicked = true;
        colorInterval = setInterval(setColor, 2000);
    }
}


function colorGameStop() {
    clearInterval(colorInterval);
    colorInterval = false;  
    document.getElementById("colorGameBasisKleur").style.backgroundColor = "rgb(192, 192, 192)";
    //document.getElementById("colorGameHitMiss").innerHTML = "";
    for (teller = 1; teller <= 9; teller++ ) 
    {
        document.getElementById("colorGameNumber" + teller).style.backgroundColor = "rgb(192, 192, 192)";
    }
}


function setColor() {
    if(!bClicked) 
    {
        scoreTeller[2]++
        console.log("To Late!");
        document.getElementById("endScoreToLate").innerHTML = scoreTeller[2];
        document.getElementById("colorGameHitMiss").innerHTML += /*scoreTeller[2] +*/ "to Late <br>";
    } 
    else 
    {
        bClicked = false;
    }

    loopTeller++;
    console.log("setColor() aangeroepen: " + loopTeller);
    let shuffledaColor = aColor.sort((a, b) => 0.5 - Math.random());

    for (let teller = 1; teller <= 9; teller++ ) {
        document.getElementById("colorGameNumber" + teller).style.backgroundColor = aColor[teller];
    }
    
    if(loopTeller >= 9) {
        console.log("De kleur is"+ loopTeller +"keer veranderd!")
        colorGameStop();
    }
}


function cgKleurVergelijking(elm) {
    if(!bClicked) {
        bClicked = true;
        let cgbasiscolorbg = document.getElementById("colorGameBasisKleur").style.backgroundColor ;
        //let dontWork = elm.style.backgroundColor = "rgb(192, 192, 192)";

        //if(document.getElementById("colorGameNumber1").style.backgroundColor != dontWork)

        if(cgbasiscolorbg == elm.style.backgroundColor)
        {
            scoreTeller[0]++
            console.log("de kleur is gelijk");
            document.getElementById("endScoreHit").innerHTML = scoreTeller[0];
            document.getElementById("colorGameHitMiss").innerHTML += /*scoreTeller[0] +*/ "Hit <br>";
            //document.getElementById("colorGameHitMiss").style.color = "green";    
        }
        else 
        {
            scoreTeller[1]++
            console.log("de kleur is niet gelijk");
            document.getElementById("endScoreMiss").innerHTML = scoreTeller[1];
            document.getElementById("colorGameHitMiss").innerHTML += /*scoreTeller[1] + */"Miss <br>";
            //document.getElementById("colorGameHitMiss").style.color = "red";
        }
    }
}


//Beun disco functie 
let intervaldisco = false;
function itvlDisco() {
    if(!intervaldisco) 
    {
        intervaldisco = setInterval(disco, 25);
    }
}

function disco() {
    console.log("function disco");
    let discoshuffle = aColor.sort((a, b) => 0.5 - Math.random());
    document.getElementById("body").style.backgroundColor = discoshuffle[0];
}
