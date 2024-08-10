const sentence = "hello friends my name is Nishu Pal";
const map = new Map();
const arr = sentence.split(" ");
for(let i of arr){
    if(map.has(i)){
        map.set(i,map.get(i)+1);
    }
    else{
        map.set(i,1);
    }
}
console.log(map);