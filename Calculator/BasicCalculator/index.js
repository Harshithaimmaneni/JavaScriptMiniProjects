const display = document.getElementById("displayText");
const buttons = document.querySelectorAll(".buttonLayout button");

let firstOperand = "";
let secondOperand=null;
let operator= false;
let result = null;


function HandleNumberInput(value){
    if(secondOperand){
        display.value += value;
    }else{
        firstOperand += value;
        display.value = firstOperand
    }
}

buttons.forEach(button=> {
    button.addEventListener("click",()=>{
        const value= button.textContent;

        if(!isNaN(value)){
            HandleNumberInput(value)
        }else if (value === "+" || value === "-" || value === "*"|| value === "/"){
            if(firstOperand !== ""){
                operator=value;
                secondOperand=true;
                display.value = ""
            }
        }else if (value === "="){
            if(firstOperand && operator !== " " && display.value!==""){
                const secondOperandValue = display.value;

                switch(operator){
                    case "+":
                        result = parseInt (firstOperand) + parseInt (secondOperandValue);
                        break;
                    case "-":
                        result = parseInt (firstOperand) - parseInt (secondOperandValue);
                        break;
                    case "*":
                        result = parseInt (firstOperand) * parseInt (secondOperandValue);
                        break;
                    case "/":
                        if(secondOperandValue===0){
                            alert("Cannot divide by zero");
                            result="";
                        }else {
                            result = parseFloat(firstOperand) / parseFloat (secondOperandValue);
                        }
                        break;
                    }
                    display.value = result;
                    firstOperand = true;
                    operator= null;
                    secondOperand =false;
            }
        }
        else if (value === "C"){
            firstOperand="";
            secondOperand= false;
            operator = null;
            display.value = ""
        }else{
            alert("Invalid Operation")
        }
    })
})