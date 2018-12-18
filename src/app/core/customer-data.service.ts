import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { ICustomerData } from '../shared/interface';

@Injectable()
export class CustomerDataService {
  baseUrl: string = 'assets/';

  getData() {
    return this.http.get(this.baseUrl + 'customer.json');
  }

  constructor(private http: HttpClient) {
  }
}
