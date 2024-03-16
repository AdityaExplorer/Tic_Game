let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let winner = document.querySelector(".winner");
let winnerMsg = document.querySelector(".msg");


let turnO= true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8] 
]

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("Button was clicked ");
        if(turnO){
            // player O turn
        box.innerText = "o";
        turnO = false;
        } else{
            //palyer X turn
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;


        checkWinner();
    });
});

const showWinner =(Winner)=>{
        winnerMsg.innerText=`Congrats, Winner is ${Winner}`;
        winner.classList.remove("hide");
}

const disabledBoxes=()=>{
    turnO=true;
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    turnO=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkWinner=()=>{
    for(let patterns of winPatterns){
            let pos1Val= boxes[patterns[0]].innerText;
            let pos2Val= boxes[patterns[1]].innerText;
            let pos3Val= boxes[patterns[2]].innerText;

            if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("Winner",pos1Val);
                    disabledBoxes();
                    showWinner(pos1Val);
                }
            }
    }
}


// Reset Button || New Game Button
const resetGame=()=>{
    turnO=true;
    enableBoxes();

    winner.classList.add("hide");
      
};

reset.addEventListener("click",resetGame);

