import { NgModule } from '@angular/core';
import { CapitalisePipe } from './capitalise.pipe';
import { CapitaliseAllPipe } from './capitalise-all.pipe';

@NgModule({
  declarations: [
    CapitalisePipe,
    CapitaliseAllPipe,
  ],
  exports: [
    CapitalisePipe,
    CapitaliseAllPipe,
  ],
})
export class SharedModule { }
