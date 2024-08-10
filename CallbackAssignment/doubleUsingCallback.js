function double(arr,doubleCallback){
    doubleArr = arr.map((ele)=>{
        return doubleCallback(ele);
    });
    return doubleArr;
}
function doubleCallback(num){
    return num*2;
}
let arr = [1,2,3,4];
let ans = double(arr,doubleCallback);
console.log(ans);
