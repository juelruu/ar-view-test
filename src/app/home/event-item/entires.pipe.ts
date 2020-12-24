import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entires'
})
export class EntiresPipe implements PipeTransform {

  transform(value: object): { title: string; value: any }[] {
    return (Object.entries(value)).map(item => {
      return {
        title: item[0],
        value: item[1]
      };
    });
  }

}
