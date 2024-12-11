// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...product: ProductComponent[]): void {
    this.children.push(...product);
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, product) => {
      return product.getPrice() + sum;
    }, 0);
  }
}

// Client
const pen = new ProductLeaf('Pen', 1);
const shirt = new ProductLeaf('Shirt', 40);
const smartphone = new ProductLeaf('Smartphone', 1_000);
const productBox = new ProductComposite();
productBox.add(pen, shirt, smartphone);

const kindle = new ProductLeaf('Kindle', 1);
const tablet = new ProductLeaf('Tabler', 40);
const anotherBox = new ProductComposite();

anotherBox.add(kindle, tablet);

productBox.add(anotherBox);

console.log(productBox);
console.log(productBox.getPrice());
