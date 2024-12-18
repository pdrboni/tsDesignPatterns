import { deliveryContext } from './delivery/delivery-context.';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Pedro', '403C', 'Av Brasil', 'Belo Horizonte');
deliveryContext(factory, 'Jordana', '403C', 'Av Brasil', 'Belo Horizonte');
deliveryContext(factory, 'Rafael', '4', 'Rua Interperes', 'Porto Alegre');
deliveryContext(factory, 'Pedro', '40', 'Rua Interperes', 'Porto Alegre');

console.log();

console.log(factory.getLocations());
