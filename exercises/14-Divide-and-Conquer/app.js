let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(){
    let even= [];
    for (let index = 0; index < list_of_numbers.length; index++) {
        if (list_of_numbers[index] % 2 === 0){
            even.push(list_of_numbers[index]);
        }
    }

    let odd=[];
    for (let index = 0; index < list_of_numbers.length; index++) {
        if (list_of_numbers[index] % 2 !== 0){
            odd.push(list_of_numbers[index]);
        }
    }
    return odd.concat (even);
}


console.log(mergeTwoList(list_of_numbers))
