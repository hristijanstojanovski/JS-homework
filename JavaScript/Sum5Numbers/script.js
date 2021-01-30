console.log("Sum of 5 numbers homework");

/* Write a function that will take an array of 5 numbers as an argument and return the sum.
 Print it in the console or in alert
 BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.*/

var array = [10, 12, 33, 24, 34];
function sum() {
    let sumOfNumbers = array[0] + array[1] + array[2] + array[3] + array[4];
    return sumOfNumbers
}
    let sumOfArray = array
    console.log(sum(`${sumOfArray} is the sum of the array`));
    //Zosto vo console log ne mi go dava tekstot posle sumOfArray?

    function validateNumber() {
        if (array.length === isNaN()) {
            return "correct"
        } else {
            return "one of the elements is not a number"
        }

    }
    let valNum = array
    console.log(validateNumber(valNum));
    //za bonusot stignav nesto vakvo ama ne sum siguren ni dali isnan vaka se pisuva i ne mi e tocno nisto najverojatno zasto mi dava else celo vreme :)