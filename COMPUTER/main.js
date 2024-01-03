const buttons = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const reset = document.querySelector(".reset");

// if true - player 1 // false - player 2
let chance = true;
player1.classList.add("player-selected");

let patterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [1,4,7],
    [2,5,8],
    [6,7,8],
    [2,4,6]
];

let choice;

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(chance){
            btn.classList.add("O");
            btn.innerText = "O";
            chance = false;
            player2.classList.add("player-selected");
            player1.classList.remove("player-selected");
        }
        else{            
            btn.classList.add("X");
            btn.innerText = "X";
            chance = true;
            player1.classList.add("player-selected");
            player2.classList.remove("player-selected");
        }
        btn.disabled = true;
        checkWinner(!chance);
        if(chance == false){
            compterTurn();
        }
    })
});

let compterTurn = ()=>{
    makeChoice();
    choice.click();
}

let makeChoice = () => {
    let idx;
    do {
        idx = Math.floor(Math.random() * 9);
        choice = buttons[idx];
    } while (choice.disabled);
    console.log(choice, idx);
    return choice;
};

let checkWinner = (chance)=>{
    for(let pattern of patterns){
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1==pos2&&pos2==pos3){
                if(chance){
                    console.log("Player1 Winner!!!");
                    for(let i of pattern){
                        buttons[i].classList.add("winO");
                    }
                }
                else{
                    console.log("Player2 Winner!!!")
                    for(let i of pattern){
                        buttons[i].classList.add("winX");
                    }
                }
                buttons.forEach((b)=> b.disabled=true);
            }
        }
    }
}

reset.onclick = ()=>{
    buttons.forEach((btn) => {
        btn.innerText = "";
        btn.classList.remove("O", "X", "winO", "winX");
        btn.disabled = false;
    });

    chance = true;
    player1.classList.add("player-selected");
    player2.classList.remove("player-selected");
}
    