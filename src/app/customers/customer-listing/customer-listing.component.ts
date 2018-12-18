import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interface';

@Component({
  selector: 'app-customer-listing',
  templateUrl: './customer-listing.component.html',
  styleUrls: ['./customer-listing.component.scss']
})
export class CustomerListingComponent implements OnInit {
  @Input() customers: ICustomer[];

  filteredCustomers: ICustomer[];
  input: string = '';
  totalOrder: number = 0;
  currencyCode: string = '£';

  calculateTotalOrder() {
    if (this.filteredCustomers && this.filteredCustomers.length) {
      this.totalOrder = this.filteredCustomers
        .map(person => person.orderTotal)
        .reduce((acc, currItem) => acc + currItem);
    } else {
      this.totalOrder = 0;
    }
  }

  filterCustomer(people) {
    if (this.input === '') {
      return people;
    } else {
      return people.filter(person => {
        const filterInput = this.input.toLowerCase();
        return person.name.toLowerCase().includes(filterInput) ||
          person.city.toLowerCase().includes(filterInput) ||
          person.orderTotal.toString().toLowerCase().includes(filterInput);
      });
    }
  }

  ngOnChanges(changes: any) {
    console.log("changes should reflect here", changes);
    this.filteredCustomers = changes.customers.currentValue;
    this.calculateTotalOrder();
  }

  compare(a, b, prop) {
    if (a[prop] < b[prop])
      return -1;
    if (a[prop] > b[prop])
      return 1;
    return 0;
  }

  sort(prop: string) {
    this.filteredCustomers = this.filteredCustomers.sort((a, b) => this.compare(a, b, prop));
  }

  constructor() { }

  inputChanged(data) {
    this.input = data;
    this.filteredCustomers = this.filterCustomer(this.customers);
    this.calculateTotalOrder();
  }

  ngOnInit() {
    this.filteredCustomers = this.customers;
    this.calculateTotalOrder();
  }

}
