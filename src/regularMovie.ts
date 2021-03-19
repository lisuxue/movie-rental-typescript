import {Movie} from "./movie";

export class RegularMovie extends Movie {
    public computePriceFromDaysRented(daysRented: number): number {
        let amount = 2;
        if (daysRented > 2) {
            amount += (daysRented - 2) * 1.5;
        }
        return amount
    }
}
