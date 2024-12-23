import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
console.log(order.getStateName()); // Pending
order.approvePayment(); // Approved
order.waitPayment(); // Pending
order.shipOrder();

order.rejectPayment(); // Rejected
order.approvePayment(); // Approved
order.waitPayment(); // Pending

order.shipOrder();
