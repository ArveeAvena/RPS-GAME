let randomNum = Math.random();
let computerMove = '';
let myscore = 0;
let computerscore = 0;




let reset = document.getElementById("resets");
let rockButton = document.getElementById("RockButton");
let paperButton = document.getElementById("PaperButton");
let scissorButton = document.getElementById("ScissorButton");
let moves = document.getElementById("moves");


//ROCK RESULTS
let rockResult1 = document.getElementById("myRock");
let scissorResult = document.getElementById("myScissor");
let paperResult = document.getElementById("myPaper");



let rockResult2 = document.getElementById("myRock2");
let rockResult3 = document.getElementById("myRock3");

let rockResult4 = document.getElementById("CompRock1");
let rockResult5 = document.getElementById("CompRock2");
let rockResult6 = document.getElementById("CompRock3");



rockButton.onclick = function(){
    if(randomNum >= 0 && randomNum < 1 / 3) {

        computerMove = 'Rock';

        
    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3 )  {

        computerMove = 'Paper';

    } else if (randomNum <= 1){

        computerMove = 'Scissors';
    }      

    if(computerMove === 'Rock'){

        
        document.getElementById('result').innerHTML = 'TIE';
        rockResult1.style.opacity = "1";
        rockResult4.style.opacity = "1";
        moves.style.opacity = "1";
       

    } else if (computerMove === 'Paper') {

        document.getElementById('result').innerHTML = 'YOU LOSE';
        rockResult1.style.opacity = "1";
        rockResult5.style.opacity = "1";
        moves.style.opacity = "1";
        computerscore++;
        computerscore = document.getElementById("computerscore").innerHTML = "COMPUTER:" + computerscore;

    } else if (computerMove === 'Scissors') {
    
        document.getElementById('result').innerHTML = 'YOU WIN';
        rockResult1.style.opacity = "1";
        rockResult6.style.opacity = "1";
        moves.style.opacity = "1";
        myscore++;
        yourscore = document.getElementById("score").innerHTML = "YOUR SCORE:" + myscore;
    } 
}

paperButton.onclick = function(){

    if(randomNum <= 0 && randomNum <= 1 / 3) {

        computerMove = 'Rock';
        
    } else if (randomNum > 1 / 3 && randomNum < 2 / 3 )  {

        computerMove = 'Paper';

    } else if (randomNum <= 1){

        computerMove = 'Scissors';
    }      

    if(computerMove === 'Rock'){

        document.getElementById('result').innerHTML = 'YOU WIN';
        paperResult.style.opacity = "1";
        rockResult4.style.opacity = "1";
        moves.style.opacity = "1";
        myscore++;
        yourscore = document.getElementById("score").innerHTML = "YOUR SCORE:" + myscore;

    } else if (computerMove === 'Paper') {

        document.getElementById('result').innerHTML = 'TIE';
        paperResult.style.opacity = "1";
        rockResult5.style.opacity = "1";
        moves.style.opacity = "1";


    } else if (computerMove === 'Scissors') {

        document.getElementById('result').innerHTML = 'YOU LOSE';
        paperResult.style.opacity = "1";
        rockResult6.style.opacity = "1";
        moves.style.opacity = "1";
        computerscore++;
        yourscore = document.getElementById("cscore").innerHTML = "COMPUTER:" + computerscore;
    } 
    
}

scissorButton.onclick = function(){

if(randomNum <= 0 && randomNum <= 1 / 3) {

    computerMove = 'Rock';
    
    } else if (randomNum > 1 / 3 && randomNum < 2 / 3 )  {
    
    computerMove = 'Paper';
    
    } else if (randomNum <= 1){
    
    computerMove = 'Scissors';
    }      
    
    if(computerMove === 'Rock'){
    
                document.getElementById('result').innerHTML = 'YOU LOSE';
                scissorResult.style.opacity = "1";
                rockResult4.style.opacity = "1";
                moves.style.opacity = "1";
                computerscore++;
                yourscore = document.getElementById("cscore").innerHTML = "COMPUTER:" + computerscore;
    
    } else if (computerMove === 'Paper') {
    
    document.getElementById('result').innerHTML = 'YOU WIN';
    scissorResult.style.opacity = "1";
    rockResult5.style.opacity = "1";
    moves.style.opacity = "1";
    myscore++;
    yourscore = document.getElementById("score").innerHTML = "YOUR SCORE:" + myscore;
    
    } else if (computerMove === 'Scissors') {
    
                document.getElementById('result').innerHTML = 'TIE';
                scissorResult.style.opacity = "1";
                rockResult6.style.opacity = "1";
    
    } 
}

resets.onclick = function(){
           
    document.getElementById('result').innerHTML = 'RESULT';
    location.reload();

}



