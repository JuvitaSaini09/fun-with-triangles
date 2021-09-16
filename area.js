const height = document.querySelector("#first-input");
const base = document.querySelector("#second-input");
const btnArea = document.querySelector("#button-area");
const result = document.querySelector("#result");


function checkHypotenuse() {
    result.style.display = "none";

    if (height.value && base.value) {
        const Height = Number(height.value);
        const Base = Number(base.value);
        if (Height>0&&Base>0){
        const Area = (Height * Base) / 2;
        result.style.display = "block";

        result.style.color = "green";
        result.innerText = "Area :" + Area + " cmsquares";
        }else{
            result.style.display = "block";
            result.style.color = "red";
            result.innerText = "Enter values greator than zero !!";
        }
    } else {
        result.style.display = "block";
        result.style.color = "#800000";
        result.innerText = "Enter all  the values  !!";
    }
}
btnArea.addEventListener("click",
    checkHypotenuse)
