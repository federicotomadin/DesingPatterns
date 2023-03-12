import {IFood} from "./IFood";


export class Spaghetti implements IFood
{
     server(): string {
        return "Food: Spaghetti";
    }

}
