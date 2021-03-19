import {IStatement} from "./IStatement";
import {Customer} from "./customer";

export class TextStatement implements IStatement {

    private customer: Customer;

    public constructor(customer: Customer) {
        this.customer = customer
    }

    public print(){
        let result = "Rental Record for " + this.customer.getName() + "\n";

        result += this.printBody()

        result += this.printFooter()

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

    public printFooter() {
        const totalPrice: number = this.customer.computeTotalRentalsPrice();
        const frequentRenterPoints: number = this.customer.computeFrequentRenterPoints();

        let statementFooter: string = "";
        statementFooter += "Amount owed is " + totalPrice.toFixed(1) + "\n";
        statementFooter += "You earned " + frequentRenterPoints + " frequent renter points";

        return statementFooter
    }
}
