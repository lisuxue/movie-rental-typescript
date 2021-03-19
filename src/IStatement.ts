import {Rental} from "./rental";
import {Customer} from "./customer";

export interface IStatement {
     print(customer: Customer): string;
}
