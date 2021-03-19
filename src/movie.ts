export abstract class Movie {

    private title: string;

    public constructor(title: string) {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public abstract computePriceFromDaysRented(daysRented: number): number;
}
