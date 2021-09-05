var bottomcont = document.querySelector('#bottomcont');
var time = document.querySelector('#time');
var hitElem = document.querySelector('#hitElem');
var scoreElem = document.querySelector('#scoreElem');
var mediaQuery = window.matchMedia('(max-width: 500px)');

var timer = 60;
var score = 0;
var rnnum;

function makeBubbles(){
    var template = ``;

    for(var i=1; i<=80; i++){
        template += `<div id="bubble">${Math.floor(Math.random()*10)}</div>`;
        bottomcont.innerHTML = template;
    }
}

if(mediaQuery.matches){
    function makeBubbles(){
        var template = ``;
    
        for(var i=1; i<=40; i++){
            template += `<div id="bubble">${Math.floor(Math.random()*10)}</div>`;
            bottomcont.innerHTML = template;
        }
    }
}

function timerFnc(){
    setInterval(function(){
    if(timer > 0){
        timer--;
        time.textContent = timer;
    }
    else{
       bottomcont.innerHTML = `<h1 id="endGame" style="font-size: 20px">Game Over</h1>
       <h4 id="scorePr" style="font-size: 15px">Your score is ${score}</h4>`;
    }
  },1000)
}

function getNewRandomNo(){
    rnnum = Math.floor(Math.random()*10);
    hitElem.textContent = rnnum;
}

function incrementScore(){
    score = score + 10;
    scoreElem.textContent = score;
}

bottomcont.addEventListener('click', function(val){
    console.log(val)
    var clickedBubbleNumber = Number(val.target.textContent);
    if(val.target.className !== "bubble"){
        if(clickedBubbleNumber === rnnum){
            incrementScore();
            bottomcont.innerHTML = "";
            makeBubbles();
            getNewRandomNo();
        } 
    }

    else{
        bottomcont.innerHTML = "";
        makeBubbles();
        getNewRandomNo();
    }
})

makeBubbles();

timerFnc();

getNewRandomNo();
