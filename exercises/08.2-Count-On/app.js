let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    if (typeof(element)=== "object") {
        hello.push(myArray[index])
    }
    

    // MAGIC HAPPENS HERE
    
}

console.log(hello)