var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let newArr= []
for (let i = 0; i < mix.length; i++) {
    let type= typeof(mix[i]);
    newArr.push(type)
   
}


console.log(newArr) 