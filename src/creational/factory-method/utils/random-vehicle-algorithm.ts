import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { Vehicle } from '../vehicle/vehicle';
import { randomNumbers } from './random-numbers';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');
  const bicycle1 = bicycleFactory.getVehicle('Caloi');

  const vehicles = [car1, car2, bicycle1];
  return vehicles[randomNumbers(vehicles.length)];
}
