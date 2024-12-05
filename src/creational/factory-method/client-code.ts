/*
  Setup an interface to create an object, but let Subclasses tell which class to instance. The factory method let us delay the instantiation to the subclasses.
*/

import { CarFactory } from './factories/car-factory';
import { randomNumbers } from './utils/random-numbers';
import { randomCarAlgorithm } from './utils/random-vehicle-algorithm';
import { Car } from './vehicle/car';

const fusca = new Car('Fusca');
fusca.pickUp('Joana');
fusca.stop();

const celta = new Car('celta');
celta.pickUp('Joana');
celta.stop();

// -------- VVVVVVV WITH FACTORY VVVVVVV --------

const carFactory = new CarFactory();
const outroFusca = carFactory.getVehicle('Outro Fusca');

outroFusca.pickUp('Outra Joana');
outroFusca.stop();

const customerNames = ['Ana', 'Joana', 'Helena', 'Jao'];

for (let i = 0; i < customerNames.length; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log();
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('-------------------------');
}
