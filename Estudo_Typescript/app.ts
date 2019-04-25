let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

//let favoriteDroid //você não diz o tipo, com isso ele fica ANY
let favoriteDroid: string
favoriteDroid = 'BB-8'
//favoriteDroid = 10
console.log("My favorite droid is " + favoriteDroid)

//Funções
let isEnoughToBeatMF = function (parsecs: number): boolean{
    return parsecs < 12
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ?  'YES': 'NO'} `)

let call = (name:String) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1 ): number{
  return speed + inc
}

console.log(`inc (5, 1) = ${inc(5,1)}`)
