import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitaliseAll'
})
export class CapitaliseAllPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      return value.split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
    }
    return null;
  }

}
