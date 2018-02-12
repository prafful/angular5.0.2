import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(user: any, searchName: any): any {
    
    if(searchName === undefined){
      return user;
    }

    return user.filter(function(user){
                        
                        return user.title.toLowerCase().includes(searchName.toLowerCase());
    });
    

  }

}
