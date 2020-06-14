/*Funções em Typescript */
var message2, message3;
/*Function 01*/
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
/*Function 02*/
var showMeTheNext = function (numberBefore) {
    return numberBefore + 1;
};
var numberVerification = 547;
console.log("The next number of " + numberVerification + " is: " + showMeTheNext(numberVerification));
/*Arrow Functions */
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
var theNextNumber = function (numberBefore2) { return console.log("The next number of " + numberBefore2 + " is: " + (numberBefore2 + 1)); };
theNextNumber(90);
/*Function 03*/
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
