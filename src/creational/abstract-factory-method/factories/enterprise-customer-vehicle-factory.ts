import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseVehicle } from '../vehicle/enterprise-vehicle';
import { Vehicle } from '../vehicle/vehicle-interface';

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(
    customerName: string,
    enterprise: string = 'No Enterprise',
  ): EnterpriseCustomer {
    return new EnterpriseCustomer(customerName, enterprise);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, customer);
  }
}
