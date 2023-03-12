import {IWeeks} from "./IWeeks";
import ConvertMonths from "./convertMonths";

export  class ConvertWeeks implements IWeeks
{
    private convertMonths!: ConvertMonths
    constructor() {
        this.convertMonths = new ConvertMonths()
    }
    convertWeeks(days: number): number {
        return this.convertMonths.convert(days)*4
    }
}
