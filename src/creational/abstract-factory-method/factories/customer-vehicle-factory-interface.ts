import { Customer } from '../customer/customer-interface';
import { Vehicle } from '../vehicle/vehicle-interface';

export interface CreateVehicleCustomer {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
