import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catPipe'
})
export class CatPipePipe implements PipeTransform {

  transform(values: any, arg?: any): any {
    if (!values || !arg) {
      return values;
    }
    
    return values.filter(value => {
      if (arg !== 'All') {
        return value.category === arg;
      } else {
        return value;
      }
    });
  }

}
