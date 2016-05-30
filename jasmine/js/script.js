// var base = prompt('Please, enter the base (integer or zero) to calculate');
//
// while (isNaN(base)) {
//     base = prompt('You\'ve entered not a number.\nEnter the base again (integer or zero)');
// }
// var exponent = prompt('Please, enter the exponent (integer or zero) to calculate');
//
// while (isNaN(exponent)) {
//     exponent = prompt('You\'ve entered not a number.\nEnter the base again (integer or zero)');
// }
//
//
// if(exponent == 0) {
//     result = 1;
// } if(base == 0) {
//     result = 0;
// } if(exponent == 1) {
//     result = base;
// } else {
//     involute();
// }
var app = {
    involute: function (base, exponent) {
        var result = base;
        for (var i = 1; i < exponent; i++) {

            result *= base;
        }
        return result;

// console.log('An involution of ' + base + ' by ' + exponent + ' exponent is ' + involute(base, exponent) + '.');

    }
};
try {
    module.exports = app;
}
catch (e){}
