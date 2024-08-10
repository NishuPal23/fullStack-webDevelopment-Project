let x = 2;
let y = 5;
function swap(x,y){
    [x,y] = [y,x];
    return [x,y];
}
[x,y] = swap(x,y);
console.log(x)
console.log(y)
