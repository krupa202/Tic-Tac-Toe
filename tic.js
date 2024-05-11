let boxes=document.querySelectorAll(".box");
let turnO=true;
let resetbtn=document.querySelector(".re");
let conclude=document.querySelector("p");
let newgame=document.querySelector(".re1");
const winPatterns=[
    [0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("the box is clcked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        Win();
    });
});
const Win=()=>{
    for(let pattern of winPatterns){
        let v1=boxes[pattern[0]].innerText;
        let v2=boxes[pattern[1]].innerText;
        let v3=boxes[pattern[2]].innerText;
        if(v1!="" && v2!="" && v3!="")
        {
            if(v1===v2 && v2===v3)
            {
              conclude.innerText=`Congratulations!! , winner is  ${v1}`;
              box.disabled=true;    
            }
        }
    }
};
resetbtn.addEventListener("click",()=>{
    turnO=true;
    for(let box of boxes)
    {
        box.innerText="";
        box.disabled=false;
    }
  conclude.innerText="Waiting for winner...";
});
newgame.addEventListener("click",()=>{
    turnO=true;
    for(let box of boxes)
    {
        box.innerText="";
        box.disabled=false;
    }
   conclude.innerText="New Game";
//   conclude.innerText="Waiting for winner...";
});