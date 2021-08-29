const inputA=document.querySelector("#first-input");
const inputB=document.querySelector("#second-input");
const btnHypotenuse=document.querySelector("#button-hypotenuse");
const result=document.querySelector("#answer");

function calculateSumOfSquares(A,B){
        

}

function  checkHypotenuse(){
    if(inputA.value&&inputB.value){
        const valueOfA=inputA.value;
        const valueOfB=inputB.value;  
        calculateSumOfSquares(valueOfA,valueOfB);
        console.log("hi")
    }
    else{
        console.log("Enter all  the values  !!")
    }
}
btnHypotenuse.addEventListener("click",
checkHypotenuse)