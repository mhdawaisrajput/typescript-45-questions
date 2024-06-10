
let numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(numbers => {
    if (numbers == 1){
        console.log("1st")
    } else if (numbers == 2){
        console.log("2nd");
    } else if (numbers == 3){
        console.log("3rd");
    } else if (numbers == 4){
        console.log("4th");
    } else if (numbers == 5){
        console.log("5th");
    } else if (numbers == 6){
        console.log("6th");
    } else if (numbers == 7){
        console.log("7th");
    } else if (numbers == 8){
        console.log("8th");
    } else if (numbers == 9){
        console.log("9th");
    }
});

// Method 02.
let number : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(number => {
    let suffix = "th";
    if (number === 1){
        suffix = "st"
    } else if ( number === 2){
        suffix = "nd"
    } else if ( number === 3){
        suffix = "rd"
    }
        console.log(`${number}${suffix}`)
});