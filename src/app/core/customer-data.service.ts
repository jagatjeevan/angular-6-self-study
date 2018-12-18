import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { ICustomerData } from '../shared/interface';

@Injectable()
export class CustomerDataService {
  baseUrl: string = 'assets/';

  getData(): Observable<ICustomerData> {
    return this.http.get(this.baseUrl + 'customer.json')
      .pipe(catchError(this.errorHandling));
  }

  private errorHandling(error: any) {
    console.log("some error", error);
  }

  constructor(private http: HttpClient) {
  }
}
