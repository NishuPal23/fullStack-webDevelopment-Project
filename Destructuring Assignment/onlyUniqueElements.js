const arr = [1,1,2,3,3,4];
function removeDuplicate(arr){
    return new Set(arr);
}
console.log(removeDuplicate(arr));