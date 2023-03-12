import {FrenchPotatoes} from "./FrenchPotatoes";
import {IFood} from "./IFood";
import {AddSauce} from "./AddSauce";


const frenchPotatoes = new FrenchPotatoes()

const addSauce = new AddSauce(frenchPotatoes)


console.log(addSauce.server())
