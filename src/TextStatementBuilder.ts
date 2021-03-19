import {IStatement} from "./IStatement";
import {Rental} from "./rental";
import {Customer} from "./customer";

export class TextStatementBuilder implements IStatement {

    private customer: Customer;

    public constructor(customer: Customer) {
        this.customer = customer
    }

    public print(){
        const totalPrice: number = this.customer.computeTotalRentalsPrice();
        const frequentRenterPoints: number = this.customer.computeFrequentRenterPoints();
        let result = "Rental Record for " + this.customer.getName() + "\n";

        result += this.printBody()

        // add footer lines
        result += "Amount owed is " + totalPrice.toFixed(1) + "\n";
        result += "You earned " + frequentRenterPoints + " frequent renter points";

        return result;
    }

    public printBody() {
        let rentalsDetails: string = "";
        for (const rental of this.customer.getRentals()) {
            const rentalAmount: number = rental.getMoviePrice()
            rentalsDetails += "\t" + rental.getMovieTitle() + "\t" + rentalAmount.toFixed(1) + "\n";
        }
        return rentalsDetails
    }
}
