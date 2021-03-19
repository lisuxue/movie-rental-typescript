import {IStatement} from "./IStatement";
import {Customer} from "./customer";

export class HtmlStatement implements IStatement {

    private customer: Customer;

    public constructor(customer: Customer) {
        this.customer = customer
    }

    public print(){
        let result = "<h1>Rental Record for <em>"+ this.customer.getName() + "</em></h1>"

        result += this.printBody()

        result += this.printFooter()

        return result;
    }

    public printBody() {
        let rentalsDetails: string = "<table>";

        for (const rental of this.customer.getRentals()) {
            const rentalAmount: number = rental.getMoviePrice()
            rentalsDetails += `<tr><td>${rental.getMovieTitle()}</td><td>${rentalAmount.toFixed(1)}</td></tr>`;
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
