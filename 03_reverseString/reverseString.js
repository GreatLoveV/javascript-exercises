const reverseString = function(word) {
    //find string length - 1 for final character
    
    let reversedString = ""
    //keep increasing the substraction till the string ends at its first index
    for (let i = 0; i <= word.length; i++){
        reversedString += word.charAt(word.length - i);

    }
    return reversedString;
    //push them all to a new variable and return it

};

// Do not edit below this line
module.exports = reverseString;
