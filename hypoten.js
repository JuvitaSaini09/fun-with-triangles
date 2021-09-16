const inputA = document.querySelector("#first-input");
const inputB = document.querySelector("#second-input");
const btnHypotenuse = document.querySelector("#button-hypotenuse");
const result = document.querySelector("#result");



function calculateSumOfSquares(A, B) {
    const sumOfSquares = A ** 2 + B ** 2;
    return sumOfSquares;
}

function checkHypotenuse() {
    result.style.display = "none";

    if (inputA.value && inputB.value) {
        const valueOfA = inputA.value;
        const valueOfB = inputB.value;
        if (valueOfA > 0 && valueOfB > 0) {
            sumOfSquares = calculateSumOfSquares(valueOfA, valueOfB);
            const hypoTenus = Math.sqrt(sumOfSquares);
            result.style.display = "block";
            result.style.color = "green";
            result.innerText = "Hypotenuse : " + hypoTenus;
        } else {
            result.style.display = "block";
            result.style.color = "red";
            result.innerText = "Enter values greator than zero!!";
        }
    } else {
        result.style.display = "block";
        result.style.color = "#800000";
        result.innerText = "Enter all  the values  !!";
    }
}
btnHypotenuse.addEventListener("click",
    checkHypotenuse)