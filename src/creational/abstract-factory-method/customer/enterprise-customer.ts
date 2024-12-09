import { Customer } from './customer-interface';

export class EnterpriseCustomer implements Customer {
  constructor(
    public name: string,
    public readonly enterprise: string,
  ) {}
}
