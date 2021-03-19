import {Movie} from "./movie";

export class NewReleaseMovie extends Movie {
    public computePriceFromDaysRented(daysRented: number): number {
        return daysRented * 3;
    }
}
