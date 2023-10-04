const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    let sum = 0;
    if (num2 > num1 && (num1 > 0 && num2 > 0)){
        for(let i = 0; i < num2; i++){
            sum += num1 + i;
        }
    }else if(num1 > num2 && (num1 > 0 && num2 > 0)){
        for(let i = 0; i < num1; i++){
            sum += num2 + i
        }
    }else{
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
