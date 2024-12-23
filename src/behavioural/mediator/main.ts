import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

seller1.addProduct({ id: '1', name: 'Paper', price: 2 });
seller1.addProduct({ id: '2', name: 'Pen', price: 3 });

seller2.addProduct({ id: '3', name: 'Pencil', price: 30 });
seller2.addProduct({ id: '4', name: 'Shirt', price: 21 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');

mediator.showProducts();
