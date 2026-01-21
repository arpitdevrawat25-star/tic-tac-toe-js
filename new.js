let boxe = document.querySelectorAll(".box");
let rest = document.querySelector("#box2");
let newbutton = document.querySelector(".newid");
let ms = document.querySelector(".message");

let turn = true;

const winner_pt =[ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxe.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn){
            box.innerText="X";
            turn = false;
        }
        else{
            box.innerText="O";
            turn = true;
        }
        box.disabled=true;

        check();
    } )  
})

const check = () => {
    for(let pattern of winner_pt){
    let pos1 = boxe[pattern[0]].innerText;
    let pos2 = boxe[pattern[1]].innerText;
    let pos3 = boxe[pattern[2]].innerText;


    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1=== pos2 && pos2=== pos3 ){
            console.log("Winner",pos1)
            winner(pos1);
        }
    }
    }

};

const resetgame = () =>{
    turn = true;
    enableboxes();
    ms.classList.add("hide");
}

const enableboxes =() =>{
    for (let box of boxe){
        box.disabled = false;
        box.innerText = ""
    }
}

const disable =() =>{
    for(let box of boxe){
        box.disabled = true;
    }
}

const winner = (win) => {
    ms.innerText=`Winner is ${win}`;
    ms.classList.remove("hide");
    disable();
}

newbutton.addEventListener("click",resetgame);

rest.addEventListener("click",resetgame);
