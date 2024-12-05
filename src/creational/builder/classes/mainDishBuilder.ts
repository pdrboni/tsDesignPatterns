import { MealBuilderProtocol } from '../interfaces/mealBuilderProtocol';
import { MealBox } from './mealBox';
import { Beans, Dessert, Rice, Watermelon } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeBeverage(): this {
    const watermelon = new Watermelon('Watermelon', 50);
    this._meal.add(watermelon);
    return this;
  }

  makeDessert(): this {
    const chocolate = new Dessert('Chocolate', 20);
    this._meal.add(chocolate);
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Rice', 50);
    const beans = new Beans('Beans', 50);
    this._meal.add(rice, beans);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
