import { Component, OnInit } from '@angular/core';
import { ICustomer } from './shared/interface';
import { CustomerDataService } from './core/customer-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'angular-self-study';
  people: ICustomer[] = [];

  changePeople() {
    this.people = this._custDataService.getData();
  }

  deteRow(data: number) {
    this._custDataService.deleteData(data);
    this.changePeople();
  }

  constructor(private _custDataService: CustomerDataService) {
  }

  ngOnInit() {
    this.changePeople();
  }
}
