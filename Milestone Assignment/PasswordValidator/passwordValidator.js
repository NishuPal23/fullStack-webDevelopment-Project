let btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let email = document.getElementById("input1").value;
    let password = document.getElementById("input2").value;
    let warn = document.getElementById("warn");
    if(email.includes("@") && password.length>=8){
        warn.textContent = "Valid email and password!";
    }
    else{
        warn.textContent = "Invalid email or password!";
    }
})