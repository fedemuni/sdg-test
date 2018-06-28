import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, text?: any): any {
    if(!items) return [];
    if(!text || text === '') return items;
    return items.filter( it => {
      return it.author.toLowerCase().includes(text) || it.title.toLowerCase().includes(text); // only filter author name
    });
  }

}
