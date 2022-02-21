
let btns = document.querySelectorAll(".drum").length;

for(let i = 0; i < btns; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let btnInnerHtml = this.innerHTML;
        makeSound(btnInnerHtml);
        buttonAnimation(btnInnerHtml);
    });

    document.addEventListener("keypress", function (e) {
        makeSound(e.key);
        buttonAnimation(e.key);
    });
}

function makeSound(key) {
    switch(key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let bass = new Audio("./sounds/kick-bass.mp3");
            bass.play();
            break;
        case "l":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation(currentKey) {
    let activeBtn = document.querySelector("." + currentKey);
        activeBtn.classList.add("pressed");
    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 200);
}