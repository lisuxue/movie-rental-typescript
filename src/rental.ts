import {Movie} from "./movie";
import {NewReleaseMovie} from "./newReleaseMovie";

export class Rental {

    private movie: Movie;
    private daysRented: number;

    public constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getDaysRented(): number {
        return this.daysRented;
    }

    public getMovieTitle(): string {
        return this.movie.getTitle()
    }

    public getMoviePrice(): number {
        return this.movie.computePriceFromDaysRented(this.daysRented)
    }

    public isTwoDaysNewReleaseRental(): boolean {
        return  (this.movie instanceof NewReleaseMovie) && this.getDaysRented() > 1
    }
}
