import {Spacecraft, ContainerShip} from './base-ships'

class MilleniumFalcon extends Spacecraft implements ContainerShip{

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }

    jumpIntoHyperSpace(){
        if (Math.random() >= 0.5){
            super.jumpIntoHyperSpace()
        }else { console.log('Failed to jump into hyperspace')}

    }
}

export {MilleniumFalcon}