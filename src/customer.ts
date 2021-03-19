import {Rental} from "./rental";

export class Customer {

    private name: string;
    private rentals: Rental[] = [];

    public constructor(name: string) {
        this.name = name;
    }

    public addRental(arg: Rental) {
        this.rentals.push(arg);
    }

    public getName(): string {
        return this.name;
    }

    public getRentals(): Rental[] {
        return this.rentals
    }

    public computeTotalRentalsPrice(): number {
        return this.rentals.reduce((acc: number, rental: Rental) => {
            return rental.getMoviePrice() + acc
        }, 0)
    }

    public computeFrequentRenterPoints(): number {
        let frequentRentalPoints: number = 0;
        this.rentals.forEach((rental: Rental) => {
            if(rental.isTwoDaysNewReleaseRental()) {
                frequentRentalPoints += 2
            } else {
                frequentRentalPoints++
            }
        })
        return frequentRentalPoints
    }
}
