import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    if(args === undefined){
      return value;
    }
    if(args === 'asc' && value!= undefined){
      return value.sort();
    }else if(args==='dsc' && value!= undefined){
      return value.sort().reverse();
    }


  }

}
