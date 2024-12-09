import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const p1 = enterpriseFactory.createCustomer('João', 'Umbrella');

const car1 = enterpriseFactory.createVehicle('Fusca', p1.name);
const car2 = individualFactory.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
