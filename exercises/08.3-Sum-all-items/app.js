function sumTheElements(theArray){
	
	var total = 0;
	
    //your code here
    for (let index = 0; index < theArray.length; index++) {
        const element = theArray[index];
        total = total + element;
        
    }

	return total;
}