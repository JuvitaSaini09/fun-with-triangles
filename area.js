const height = document.querySelector("#first-input");
const base = document.querySelector("#second-input");
const btnArea = document.querySelector("#button-area");
const result = document.querySelector("#result");


function checkHypotenuse() {
    result.style.display = "none";

    if (height.value && base.value) {

        const Height = Number(height.value);
        const Base = Number(base.value);
        const Area = (Height * Base) / 2;
        result.style.display = "block";
        result.innerText = Area;
    } else {
        result.style.display = "block";
        result.innerText = "Enter all  the values  !!";
    }
}
btnArea.addEventListener("click",
    checkHypotenuse)
   