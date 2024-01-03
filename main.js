const computer = document.getElementsByTagName("div")[1].children[0];
const player = document.getElementsByTagName("div")[1].children[1]
const start = document.querySelector(".start");
computer.addEventListener("click", () => {
    if (!computer.classList.contains("computer")) {
        // If computer is not selected, toggle it and deselect player
        computer.classList.add("computer");
        player.classList.remove("player2");
    }
});

player.addEventListener("click", () => {
    if (!player.classList.contains("player2")) {
        // If player is not selected, toggle it and deselect computer
        player.classList.add("player2");
        computer.classList.remove("computer");
    }
});

start.addEventListener("click",()=>{
    if(player.classList.contains("player2")){
        document.querySelector("a").setAttribute("href","player/index.html");
    }
    else if(computer.classList.contains("computer")){
        document.querySelector("a").setAttribute("href","computer/index.html");
    }
});
