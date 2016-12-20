import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'unescape'})
export class UnescapePipe implements PipeTransform {
  transform(value: string, args: any[] = []) {
    return decodeURIComponent(value);
  }
}
