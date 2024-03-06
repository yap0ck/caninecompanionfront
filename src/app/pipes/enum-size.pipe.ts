import { Pipe, PipeTransform } from '@angular/core';
import {DogSize} from "../models/Breed";

@Pipe({
  standalone: true,
  name: 'enumSize'
})
export class EnumSizePipe implements PipeTransform {

  transform(value: string, ): string {
    switch (value){
      case 'BIG': return DogSize.BIG;
      case 'AVERAGE': return DogSize.AVERAGE;
      case 'SMALL': return DogSize.SMALL;
      default: return ''
    }
  }

}
