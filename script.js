
// code for making bubble
let bub = () => {
    let clutter = "";

for(let i = 0; i <= 50; i++){
    let rn = Math.floor(Math.random()*10);
    clutter +=  `<div class="bubble">${rn}</div>`;
}

document.querySelector('#panel-bottom').innerHTML = clutter;

}

bub();


// code For timer
let timer = 60;
function runTimer() {
    let timing = setInterval(function(){
        if(timer>0){
            timer--;
            
        }
        else{
            clearInterval(timing);
            document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over</h1>`;
        }

        console.log("running ====> ", timer);
        document.querySelector("#timerval").textContent = timer;
    }, 1000)
}

runTimer();


// code for getting random number in every new hit
let rn;
function getNewHit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}
getNewHit();

// code for calculating the the score
let score = 0;
function IncreaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

document.querySelector("#panel-bottom")
.addEventListener("click", (clicked) => {
    let clickedNumber = Number(clicked.target.textContent)
    if(clickedNumber === rn){
        IncreaseScore();
        bub();
        getNewHit();
    }
})



