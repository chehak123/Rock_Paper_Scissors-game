var userscore = 0;
var compscore = 0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("comp-score");
const scoreboard=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
const emoji_span=document.getElementById("emoji");

var userscore2;
var compscore2;
var count=0;

function finalres(userscore2,compscore2){

if(userscore2>compscore2){
result_div.innerHTML="MATCH ENDED. CONGRATULATIONS, YOU WON THE MATCH!!!";
emoji_span.innerHTML="🎊😍😍😍🎊";
}   

if(compscore2>userscore2){
result_div.innerHTML="MATCH ENDED. OHHO, YOU LOST THE MATCH!!! ";
emoji_span.innerHTML="😔😔😔";
}

if(userscore2===compscore2){
result_div.innerHTML="MATCH ENDED. NO WORRIES, YOU ENDED IN A DRAW!!!";
emoji_span.innerHTML="🙄🙄🙄";
}
userscore=0;
compscore=0;
// count=0;

userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
}

function convert(letter){
if(letter==="r")
return "Rock";
if(letter==="p")
return "Paper";

return "Scissors";
}

function getcompchoice(){
    const choices=['r','p','s'];
    const random=Math.floor(Math. random()*3);
    return choices[random];
}

// console.log(getcompchoice);

function wins(userchoice,compchoice){
userscore++;
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
result_div.innerHTML = convert(userchoice)+" beats "+convert(compchoice)+". You win!!";
// count++;
if(userscore===10 || compscore===10){
    userscore2=userscore;
    compscore2=compscore;
        userscore=0;
        compscore=0;
    }
}

function loses(userchoice,compchoice){
compscore++;
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
result_div.innerHTML = convert(compchoice)+" beats "+convert(userchoice)+". You lose!!";
// count++;
if(userscore===10 || compscore===10){
    userscore2=userscore;
    compscore2=compscore;
    userscore=0;
    compscore=0;
}
}

function draw(userchoice,compchoice){
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
result_div.innerHTML="Both chooses the same. It's a draw!!";
// count++;
if(userscore===10 || compscore===10){
    userscore2=userscore;
    compscore2=compscore;
    userscore=0;
    compscore=0;
}
}


function game(userchoice){
const compchoice=getcompchoice();
switch(userchoice+compchoice){
    case("rp"):
    case("sr"):
    case("ps"):
      loses(userchoice,compchoice);
      break;

    case("pr"):
    case("rs"):
    case("sp"):
      wins(userchoice,compchoice);
      break;

    case("pp"):
    case("rr"):
    case("ss"):
      draw(userchoice,compchoice); 
      break;   
}

if(userscore2===10 || compscore2===10){
    // count=15;
    finalres(userscore2,compscore2);
}
}


function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })

    paper_div.addEventListener('click',function(){
        game("p");
    })

    scissors_div.addEventListener('click',function(){
        game("s");
    })
}

main();
