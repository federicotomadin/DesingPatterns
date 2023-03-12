import {IFood} from "./IFood";


export abstract class ASauceDecorator implements IFood
{
    protected  _decoratedFood: IFood;

    protected constructor(decoratedFood: IFood) {

        this._decoratedFood = decoratedFood

    }

    server(): string {
        return this._decoratedFood.server()
    }



}
