import { Pipe, PipeTransform } from '@angular/core';
import {Disease} from "../models/Vaccine";

@Pipe({
  name: 'enumDisease'
})
export class EnumDiseasePipe implements PipeTransform {

  transform(value: string, ): string {
    switch (value){
      case 'RAGE': return Disease.RAGE;
      case 'MALADIE_DE_CARRE': return Disease.MALADIE_DE_CARRE;
      case 'HEPATITE_DE_RUBARTH': return Disease.HEPATITE_DE_RUBARTH;
      case 'PARVOVIROSE': return Disease.PARVOVIROSE;
      case 'INFLUENZA' : return Disease.INFLUENZA;
      case 'LEPTOSPIROSE': return Disease.LEPTOSPIROSE;
      case 'LEISHMANIOSE': return Disease.LEISHMANIOSE;
      case 'PIROPLASMOSE' : return Disease.PIROPLASMOSE;
      case 'TOUX_DU_CHENIL' : return Disease.TOUX_DU_CHENIL;
      default: return ''
    };
  }

}
