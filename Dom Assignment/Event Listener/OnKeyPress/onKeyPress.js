let inputBox = document.getElementById("input-box");
let outer = document.getElementById("outer");
inputBox.addEventListener("keypress",function(e){
    outer.innerText = "You have Entered "+ e.key;
})