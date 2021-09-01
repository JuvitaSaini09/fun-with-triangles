const answers = document.querySelector(".question-form");
const btnForScores = document.querySelector("#submit-button");
const result = document.querySelector("#result");


const rightAnswers = ["90°", "right angled", "60°", "Hypotenuse", "right angle"];

function OnClickHandler() {
    let index = 0;
    let scores = 0;
    const formValues = new FormData(answers);
    for (let input of formValues.values()) {
        if ((rightAnswers[index]) === input) {
            scores = scores + 1;
        }
        index++;
    }
    result.style.color = "green";
    result.innerText = "scores are :" + scores;
}

btnForScores.addEventListener("click", OnClickHandler);