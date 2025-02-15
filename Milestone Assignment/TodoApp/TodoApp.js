btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let val = document.getElementById("input").value;
    let ul = document.getElementById("list-item")
    let li = document.createElement('li');
    li.textContent = val;
    li.style.border = "2px solid white";
    li.style.width="300px";
    li.style.marginTop="10px";
    li.style.background ="linear-gradient(to right, red, yellow)";
    li.style.borderRadius="5px";
    li.style.fontSize = "20px"
    li.style.textAlign="center";
    li.style.color="white";
    li.style.fontWeight="bold";
    ul.appendChild(li);
    document.getElementById("input").value = ""; 
})