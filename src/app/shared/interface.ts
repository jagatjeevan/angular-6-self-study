export interface ICustomer {
  id: number;
  name: string;
  city: string;
  orderTotal?: number;
  customerSince: any;
};

export interface ICustomerData {
  customers: ICustomer[]
}
