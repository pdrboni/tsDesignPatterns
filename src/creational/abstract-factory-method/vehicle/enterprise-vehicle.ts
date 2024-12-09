import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { Vehicle } from './vehicle-interface';

export class EnterpriseVehicle implements Vehicle {
  constructor(
    public name: string,
    private readonly customer: EnterpriseCustomer,
  ) {}

  pickUp(): void {
    console.log(
      `The car ${this.name} is picking up ${this.customer.name} of company ${this.customer.enterprise}`,
    );
  }
}
