import {IMonths} from "./IMonths";


export default class ConvertMonths implements IMonths {

    convert(days: number): number {
        return days / 30
    }


}
