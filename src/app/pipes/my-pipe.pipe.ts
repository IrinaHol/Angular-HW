import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
transform(value: any, symbol?: string, counter?: number): any {
  for (let i = 0; i < counter; i++) {
    value += symbol;
  }
  return value;
  // console.log(value);
  // return value += '!';
}
}
