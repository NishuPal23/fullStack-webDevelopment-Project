function manipulatedString(inputString,callback){
    let manipulateString = inputString.toUpperCase();
    return callback(manipulateString);
}
function callback(inputString){
    console.log(inputString);
}
manipulatedString("Nishu",callback);