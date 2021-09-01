const angle1 = document.querySelector("#angle1-input");
const angle2 = document.querySelector("#angle2-input");
const angle3 = document.querySelector("#angle3-input");
const btn = document.querySelector("#Is-triangle-button")
const result = document.querySelector("#result");

function checkingTriangle() {

    if (angle1.value && angle2.value && angle3.value) {

        const angle_1 = Number(angle1.value);
        const angle_2 = Number(angle2.value);
        const angle_3 = Number(angle3.value);
        angleSum = sumOfTriangle(angle_1, angle_2, angle_3)

        if (angleSum === 180) {
            result.style.color = "green";
            result.innerText = "Yay!! It can form a triangle";
        } else {
            result.style.color = "#800000";
            result.innerText = "ohoo !! they don't form a  angle";
        }
    } else {
        result.style.color = "red";
        result.innerText = "Enter all the values  !!";

    }
}

function sumOfTriangle(angleOne, angleTwo, angleThree) {
    const angleSum = angleOne + angleTwo + angleThree;
    return angleSum;
}

btn.addEventListener("click", checkingTriangle)