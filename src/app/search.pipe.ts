import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allStudent:any[],searchKey:string): any[] {
    const result:any = []
    if(!allStudent || searchKey === ""){
      return allStudent
    }
    allStudent.forEach((item:any)=>{
      if(item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
