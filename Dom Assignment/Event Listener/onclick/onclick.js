function changeBg(){
    let divEle = document.getElementsByClassName("button-wrapper");
    let hex = "123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    for(let i = 0; i < divEle.length; i++){
        divEle[i].style.backgroundColor = color;
    }
}
let num = Math.floor((Math.random()*10)+1);
console.log(num);