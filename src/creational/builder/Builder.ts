/*
  BUILDER DESIGN PATTERN
  O padrão sugere a separação do código que cria um objeto e o código que utiliza o objeto (código cliente);

  Trata da criação de objetos complexos (construtores muito complexos, Composites (vários objetos para compor uma estrutura maior), Algoritmo de criação mais complexo);

  Permite a criação de um objeto em etapas;

  Permite method chaining;

  O objeto final pode variar de acordo com a necessidade

*/

import { MainDishBuilder } from './classes/mainDishBuilder';
import { VeganDishBuilder } from './classes/veganDishBuilder';
//import { MealBox } from './classes/mealBox';
//import { Beans, Dessert, Rice } from './classes/meals';

/*
const rice = new Rice('Rice', 5);
const beans = new Beans('Beans', 8);
const chocolate = new Dessert('Chocolate', 10);

const mealBox = new MealBox();
mealBox.add(rice, beans, chocolate);
*/

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
