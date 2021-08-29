const answers= document.querySelector("#question-form");
const btnForScores= document.querySelector("#submit-button");

const rightAnswers = ["90°","right angled","60°","Hypotenuse","right angle triangle"];

function OnClickHandler(){
    let index=0;
    let scores=0;
    const formValues=new FormData(answers)
    for(let input of formValues)
    {
console.log(input)
    }
    
}

btnForScores.addEventListener("click",OnClickHandler)