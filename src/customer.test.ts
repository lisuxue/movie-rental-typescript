import {Customer} from "./customer";
import {Rental} from "./rental";
import {RegularMovie} from "./regularMovie";
import {NewReleaseMovie} from "./newReleaseMovie";
import {ChildrensMovie} from "./childrensMovie";
import {TextStatement} from "./TextStatement";

describe("Customer", () => {
    it("should return the correct text statement", () => {
        const customer = new Customer("Bob");
        customer.addRental(new Rental(new RegularMovie("Jaws"), 2));
        customer.addRental(new Rental(new RegularMovie("Golden Eye"), 3));
        customer.addRental(new Rental(new NewReleaseMovie("Short New"), 1));
        customer.addRental(new Rental(new NewReleaseMovie("Long New"), 2));
        customer.addRental(new Rental(new ChildrensMovie("Bambi"), 3));
        customer.addRental(new Rental(new ChildrensMovie("Toy Story"), 4));

        const statement = new TextStatement(customer);

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

    it("should return the correct html statement", () => {
        const customer = new Customer("Bob");
        customer.addRental(new Rental(new RegularMovie("Jaws"), 2));
        customer.addRental(new Rental(new RegularMovie("Golden Eye"), 3));
        customer.addRental(new Rental(new NewReleaseMovie("Short New"), 1));
        customer.addRental(new Rental(new NewReleaseMovie("Long New"), 2));
        customer.addRental(new Rental(new ChildrensMovie("Bambi"), 3));
        customer.addRental(new Rental(new ChildrensMovie("Toy Story"), 4));

        const statement = new TextStatement(customer);

        const expected = "" +
            "<h1>Rental Record for <em>martin</em></h1> \
        <table> \
            <tr><td>Ran</td><td>3.5</td></tr> \
        <tr><td>Trois Couleurs: Bleu</td><td>2</td></tr> \
        </table> \
        <p>Amount owed is <em>5.5</em></p> \
        <p>You earned <em>2</em> frequent renter points</p>"

        expect(statement.print()).toBe(expected);
    });
});
