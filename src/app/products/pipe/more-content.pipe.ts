import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moreContent'
})
export class MoreContentPipe implements PipeTransform {

  transform(value: any): any {
    return `${value} ...`;
  }

}
