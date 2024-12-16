import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const decoratedTShirtFront = new ProductStampDecorator(tShirt);
const decoratedTShirtBackAndFront = new ProductStampDecorator(
  decoratedTShirtFront,
);

console.log(tShirt.getName());
console.log(decoratedTShirtFront.getName());
console.log(decoratedTShirtBackAndFront.getName());

console.log(tShirt.getPrice());
console.log(decoratedTShirtFront.getPrice());
console.log(decoratedTShirtBackAndFront.getPrice());
