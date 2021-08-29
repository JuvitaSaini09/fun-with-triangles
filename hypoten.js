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
        sumOfSquares = calculateSumOfSquares(valueOfA, valueOfB);
        const hypoTenus = Math.sqrt(sumOfSquares);
        result.style.display = "block";
        result.innerText = hypoTenus;
    } else {
        result.style.display = "block";
        result.innerText = "Enter all  the values  !!";
    }
}
btnHypotenuse.addEventListener("click",
    checkHypotenuse)