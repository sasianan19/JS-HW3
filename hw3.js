var numbers = [10, 20, 30, 40, 50];
    function addNumbers(array) {
    for(var i = 0, length = array.length, sum = 0; i < length; sum += array[i++]); 
        return sum;
}
console.log(addNumbers(numbers));


var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function reverseArr1() {
        for(var i = 10; i > -1; i--) {
            console.log(i);
    }
}
reverseArr1(array1);


for (var i = 1; i < 101; i=i+1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
    
}