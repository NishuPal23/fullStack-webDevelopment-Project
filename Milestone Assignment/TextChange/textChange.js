
function change(){
  let h1 = document.getElementById("head1");
  if(h1.innerText==="The most affordable learning Platform"){
    h1.innerText = "PW Skills"
  }
  else{
    h1.innerText = "The most affordable learning Platform";
  }
}
let btn = document.getElementById("btn");
btn.addEventListener("click",change);