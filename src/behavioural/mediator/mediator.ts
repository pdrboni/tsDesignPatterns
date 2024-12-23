import { Seller } from './seller';
import { SellerProduct } from './seller-product-protocol';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => this.sellers.push(seller));
  }

  buy(id: string): SellerProduct | void {
    let product;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log(
          'Selling product: ',
          product.id,
          product.name,
          product.price,
        );
        return;
      }
    }

    console.log('Product not found');
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
