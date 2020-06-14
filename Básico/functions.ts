/*Funções em Typescript */
let message2, message3: string

/*Function 01*/ 
let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}`)

/*Function 02*/
let showMeTheNext = function (numberBefore: number): number {
    return numberBefore + 1
}

let numberVerification = 547
console.log(`The next number of ${numberVerification} is: ${showMeTheNext(numberVerification)}`)

/*Arrow Functions */
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

let theNextNumber = (numberBefore2: number) => console.log(`The next number of ${numberBefore2} is: ${numberBefore2 + 1}`)
theNextNumber(90)

/*Function 03*/
function inc (speed: number, inc: number = 1): number {
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)