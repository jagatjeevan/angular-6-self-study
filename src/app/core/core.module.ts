import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDataService } from './customer-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ CustomerDataService ]
})
export class CoreModule { }
