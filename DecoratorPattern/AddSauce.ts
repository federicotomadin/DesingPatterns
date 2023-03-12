import {ASauceDecorator} from "./ASauceDecorator";
import {IFood} from "./IFood";


export class AddSauce extends ASauceDecorator
{

    constructor(decoratedFood: IFood) {
        super(decoratedFood);
    }

     server(): string
     {
         return this.addSauce()
     }

     private addSauce(): string
     {
         return this._decoratedFood.server() + " with Sauce"
     }

}
