var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let newPeople= [];
    newPeople= people.splice();
    return newPeople;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));


// const mergeArrays = (firstArray, secondArray) => {
//     let newArray = []
//     //your code here
//      newArray= firstArray.concat(secondArray);
//     return newArray;
    
