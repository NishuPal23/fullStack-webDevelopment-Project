function ageInDays(obj,callback){
    let fullName = obj.firstName+" "+obj.lastname;
    let ageInDays = obj.age*365;
    return callback(fullName,ageInDays);
}
function callback(fullName,ageInDays){
    console.log("Person full name is "+fullName);
    console.log("Person age in days "+ageInDays);
}
let obj = {
    firstName : "Nishu",
    lastname : "Pal",
    age :12
}
ageInDays(obj,callback);