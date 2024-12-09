import { Customer } from '../customer/customer-interface';
import { Vehicle } from './vehicle-interface';

export class IndividualVehicle implements Vehicle {
  constructor(
    public name: string,
    private readonly customer: Customer,
  ) {}

  pickUp(): void {
    console.log(`The car ${this.name} is picking up ${this.customer.name}`);
  }
}
