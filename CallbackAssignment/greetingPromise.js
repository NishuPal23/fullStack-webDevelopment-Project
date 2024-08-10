function greet(name){
    return new Promise((resolve)=>{
        const message = `Hello ${name}`
        resolve(message);
    })
}
greet("Nishu").then((message)=>console.log(message));

