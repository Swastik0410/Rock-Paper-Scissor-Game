let user=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp");


const genComputerChoice=()=>{
    //rock,paper,scissor
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
}
const drawgame=()=>{
    console.log("The game was draw");
    msg.innerText="The game is draw";
    msg.style.backgroundColor=" rgb(0, 0, 255);";
}
const showWinner=(userwin)=>{
    if(userwin){
        user++;
        userScorePara.innerText=user;
        console.log("You win");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else{
        comp++;
        compScorePara.innerText=comp;
        console.log("You loose");
         msg.innerText="You loose";
         msg.style.backgroundColor="red";

    }

}


const playGame=(userchoice)=>{
    console.log("User choice=",userchoice);
    //Generate Computer Choice---->Modular
    const computerchoice=genComputerChoice();
    console.log("Computer choice=",computerchoice);

    if(userchoice===computerchoice){
        //Drawgame
        drawgame();

    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin=computerchoice==='paper'?false:true;
        }
        else if(userchoice==='paper'){
            userwin=computerchoice==='scissor'?false:true;
        }
        else{
           userwin=computerchoice==='rock'?false:true;
        }

        showWinner(userwin);
    }

   

}



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    })
    
});
