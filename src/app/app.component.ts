import { Component, OnInit } from '@angular/core';
import { ICustomer, ICustomerData } from './shared/interface';
import { CustomerDataService } from './core/customer-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'angular-self-study';
  people: ICustomer[] = [];

  changePeople() {
    this._custDataService.getData()
      .subscribe((data: ICustomerData) => {
        this.people = data.customers;
      });
  }

  deteRow(id: number) {
    this.people = this.people.filter(item => item.id != id);
  }

  constructor(private _custDataService: CustomerDataService) {
  }

  ngOnInit() {
    this.changePeople();
  }
}
