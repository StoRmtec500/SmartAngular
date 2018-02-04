import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checked'
})
export class CheckPipe implements PipeTransform {

  transform(checked: boolean, args?: any): any {
    let result : string = !checked ? `<img src="/assets/images/check.png"></img>`: ""
    return result;
  }

}
