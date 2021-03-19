import {Customer} from "./customer";
import {Rental} from "./rental";
import {RegularMovie} from "./regularMovie";
import {NewReleaseMovie} from "./newReleaseMovie";
import {ChildrensMovie} from "./childrensMovie";
import {TextStatementBuilder} from "./TextStatementBuilder";

describe("Customer", () => {
    it("should test", () => {
        const customer = new Customer("Bob");
        customer.addRental(new Rental(new RegularMovie("Jaws"), 2));
        customer.addRental(new Rental(new RegularMovie("Golden Eye"), 3));
        customer.addRental(new Rental(new NewReleaseMovie("Short New"), 1));
        customer.addRental(new Rental(new NewReleaseMovie("Long New"), 2));
        customer.addRental(new Rental(new ChildrensMovie("Bambi"), 3));
        customer.addRental(new Rental(new ChildrensMovie("Toy Story"), 4));

        const statement = new TextStatementBuilder(customer);

        const expected = "" +
            "Rental Record for Bob\n" +
            "\tJaws\t2.0\n" +
            "\tGolden Eye\t3.5\n" +
            "\tShort New\t3.0\n" +
            "\tLong New\t6.0\n" +
            "\tBambi\t1.5\n" +
            "\tToy Story\t3.0\n" +
            "Amount owed is 19.0\n" +
            "You earned 7 frequent renter points";

        expect(statement.print()).toBe(expected);
    });
});
