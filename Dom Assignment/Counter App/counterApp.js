
function increment(){
    let inp = document.getElementById("inp");
    let currentValue = parseInt(inp.value,10);
    currentValue = currentValue+1;
    inp.value =  currentValue;
}
function decrement(){
    let inp = document.getElementById("inp");
    let currentValue = parseInt(inp.value,10);
    currentValue = currentValue-1;
    inp.value =  currentValue;
}
function reset(){
    let inp = document.getElementById("inp");
    let currentValue = parseInt(inp.value,10);
    currentValue = 0;
    inp.value =  currentValue;
}