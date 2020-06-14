class Spacecraft{
    constructor(public propulsor: string){}

    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

interface ContainerShip {
    /*Para fazer ficar anulável, fica com a ? na frente*/
    cargoContainers: number
}

export {Spacecraft, ContainerShip}