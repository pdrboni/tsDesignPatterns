import { MainDishBuilder } from '../../creational/builder/classes/mainDishBuilder';
import { VeganDishBuilder } from '../../creational/builder/classes/veganDishBuilder';

export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeDessert();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.makeMeal().makeBeverage();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal3(): void {
    this.veganDishBuilder.makeMeal();
    console.log(this.veganDishBuilder.getMeal());
    console.log(this.veganDishBuilder.getPrice());
  }
}
