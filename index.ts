import inquirer from "inquirer";
async function startFunc(){
    const systemNum=Math.floor(Math.random()*10);
    const userNum=await inquirer.prompt([
        {
            type:"mumber",
            name:"userGuess",
            Message:"Enter Your Number between 1 to 10: "
        }
    ])

    const{userGuess}=userNum;
    console.log("Your Guess: ",userGuess,"\nSystem's Guess: ", systemNum);
    if(userGuess===systemNum){
        console.log("Your Guess is Correct\n You Won!!");
        
    }
    else{
        console.log("Better Luck Next Time");
    
     }
   
}

async function startAgain(){
    do{
        await startFunc();
        var again=await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Do you Want to Continue? Press Y or N"
        })
    }
    while( again.restart=="Y"||again.restart =="y"||again.restart=="YES"||again.restart=="yes")
}
startAgain();

