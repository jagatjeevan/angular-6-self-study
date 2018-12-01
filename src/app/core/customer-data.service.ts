import { Injectable } from '@angular/core';

@Injectable()
export class CustomerDataService {
  records;
  private _recordList = [
    { id: 1, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    { id: 2, name: 'Jane doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22) },
    { id: 3, name: 'Michelle thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31) },
    { id: 4, name: 'Jim thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31) },
    { id: 11, name: 'jeevan', city: 'Cuttack', orderTotal: 1279.99, customerSince: new Date(2018, 7, 10) },
    { id: 12, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    { id: 32, name: 'Jane doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22) },
    { id: 34, name: 'Michelle thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31) },
    { id: 41, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31) },
    { id: 121, name: 'jeevan', city: 'Cuttack', orderTotal: 1279.99, customerSince: new Date(2018, 7, 10) },
    { id: 1212, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    { id: 24, name: 'Jane doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22) },
    { id: 43, name: 'Michelle thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31) },
    { id: 54, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31) },
    { id: 1210, name: 'jagat jeevan', city: 'Cuttack', orderTotal: 1279.99, customerSince: new Date(2018, 7, 10) },
  ];

  getData() {
    return this.records;
  }

  deleteData(id: number) {
    this.records = this.records.filter(item => item.id != id);
  }
  constructor() {
    this.records = this._recordList;
  }
}
