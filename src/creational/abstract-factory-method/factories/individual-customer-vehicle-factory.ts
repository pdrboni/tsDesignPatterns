import { Customer } from '../customer/customer-interface';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualVehicle } from '../vehicle/individual-vehicle';
import { Vehicle } from '../vehicle/vehicle-interface';

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualVehicle(vehicleName, customer);
  }
}
