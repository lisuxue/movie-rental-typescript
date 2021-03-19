import {Movie} from "./movie";

export class ChildrensMovie extends Movie {
    public computePriceFromDaysRented(daysRented: number): number {
        let amount = 1.5;
        if (daysRented > 3) {
            amount += (daysRented - 3) * 1.5;
        }
        return amount
    }
}
