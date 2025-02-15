const items = [
    "Introduction to JavaScript",
    "Variables and Data Types",
    "Functions and Scope",
    "Objects and Arrays",
    "DOM Manipulation",
    "Event Handling",
    "Asynchronous JavaScript",
    "Error Handling"
];
let currentIndex = 0;
function addItems(){
    let item = document.getElementById("list-item");
    let message = document.getElementById("message");
    if(currentIndex<items.length){
        let li = document.createElement("li");
        li.textContent = `${currentIndex+1}. ${items[currentIndex]}`;
        li.style.border = "2px solid white";
        li.style.margin="10px"
        li.style.background ="linear-gradient(to right, red, yellow)";
        li.style.borderRadius="5px";
        
        item.appendChild(li);
        currentIndex++;
    }
    else{
        message.textContent = "All items are added";
    }
}
btn.addEventListener("click",addItems);