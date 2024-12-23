import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Cant approve an rejected order');
  }

  rejectPayment(): void {
    console.log('Order already Rejected');
  }

  waitPayment(): void {
    console.log('Cant wait an rejected order');
  }

  shipOrder(): void {
    console.log('Cant ship a rejected order');
  }
}
