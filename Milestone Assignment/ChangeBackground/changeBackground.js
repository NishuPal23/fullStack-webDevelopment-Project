let btn = document.getElementById("btn");
btn.addEventListener("click",change);
function change(){
    let body = document.getElementById("body");
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i =0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    body.style.backgroundColor=color;
}