export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number; //The question mark represents this field is optional
    customerSince: any;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}