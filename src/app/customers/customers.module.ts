import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CustomerListingComponent } from './customer-listing/customer-listing.component';
import { FilterCustomersComponent } from './filter-customers/filter-customers.component';

@NgModule({
  declarations: [ CustomerListingComponent, FilterCustomersComponent ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [CustomerListingComponent]
})
export class CustomersModule { }
