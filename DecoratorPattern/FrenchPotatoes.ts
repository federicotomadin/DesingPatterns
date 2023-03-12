import {IFood} from "./IFood";

export class FrenchPotatoes implements IFood
{
    server(): string {
        return "Food: FrenchPotatoes";
    }
}
