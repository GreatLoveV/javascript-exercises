const leapYears = function(year) {
    let divisibleBy4;
    if (year % 4 == 0){
        divisibleBy4 = true
    }else{
        divisibleBy4 = false;
    }
    let divisibleBy100;
    if (divisibleBy4 == true){
        if (year % 100 == 0){
            divisibleBy100 = true
        }else {
            divisibleBy100 = false
        }
    }
    let divisibleBy400;
    if (divisibleBy4 == true && divisibleBy100 == true){
        if (year%400 == 0 ){
            divisibleBy400 = true
        }else {
            divisibleBy400 = false
        }
    }
    if (divisibleBy4 == true){
        if (divisibleBy100 == false){
            return true
        }else if (divisibleBy100 == true){
            if (divisibleBy400 == true){
                return true
            }
        }else{
            return false
        }
    }else {
        return false
    }
    if (divisibleBy100 == true && divisibleBy400 == false){
        return false
    }else if (divisibleBy100 == true && divisibleBy400 == true){
        return true
    }
}
// Do not edit below this line
module.exports = leapYears;


// if (year % 4 == 0 && year % 100 != 0){
//     return true;
// }else if (year % 4 == 0 && year % 100 == 0){
//     if(year % 400 == 0){
//         return true;
//     }
// }else{
//     return false
// }