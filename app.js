let audioA = document.querySelector("#KeyA");
let audioS = document.querySelector("#KeyS");
let audioD = document.querySelector("#KeyD");
let audioF = document.querySelector("#KeyF");
let audioG = document.querySelector("#KeyG");
let audioH = document.querySelector("#KeyH");

let code;

window.addEventListener("keypress",(e)=>{
    code=e.code;
    if(code=="KeyA"){
        audioA.play();
        let key = document.querySelector('#a');
        key.classList.add('playing');
        key.addEventListener('transitionend', function() {
            this.classList.remove('playing');
        });
    }
    if(code=="KeyS"){
        audioS.play();
        let key = document.querySelector('#s');
        key.classList.add('playing');
        key.addEventListener('transitionend', function() {
            this.classList.remove('playing');
        });
    }
    if(code=="KeyD"){
        audioD.play();
        let key = document.querySelector('#d');
        key.classList.add('playing');
        key.addEventListener('transitionend', function() {
            this.classList.remove('playing');
        });
    }
    if(code=="KeyF"){
        audioF.play();
        let key = document.querySelector('#f');
        key.classList.add('playing');
        key.addEventListener('transitionend', function() {
            this.classList.remove('playing');
        });
    }
    if(code=="KeyG"){
        audioG.play();
        let key = document.querySelector('#g');
        key.classList.add('playing');
        key.addEventListener('transitionend', function() {
            this.classList.remove('playing');
        });
    }
    if(code=="KeyH"){
        audioH.play();
        let key = document.querySelector('#h');
        key.classList.add('playing');
        key.addEventListener('transitionend', function() {
            this.classList.remove('playing');
        });
    }
});





