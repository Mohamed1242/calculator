const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharts = ["*", "%", "-", "+", "="];
let output = "";
const calculate = (btnvalue) => {
    if(btnvalue==="="&&output!==""){
        output=eval(output.replace("%","/100"))
    }else if(btnvalue==="c"){
        output=""
    }else{
        if(output===""&&specialCharts.includes(btnvalue))return
        output+=btnvalue
    }
display.value=output
};

buttons.forEach((button) => {
  button.addEventListener("click", e => calculate(e.target.dataset.value));
});
