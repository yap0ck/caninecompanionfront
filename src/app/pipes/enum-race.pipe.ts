import {Pipe, PipeTransform} from '@angular/core';
import {RaceGroup} from "../models/Breed";

@Pipe({
  name: 'enumRace'
})
export class EnumRacePipe implements PipeTransform {

  transform(value: string, ): string {
    switch (value){
      case 'GREYHOUND': return RaceGroup.GREYHOUND;
      case 'HOUND_BLOODHOUND': return RaceGroup.HOUND_BLOODHOUND
      case 'NOT_RECOGNIZED': return RaceGroup.NOT_RECOGNIZED;
      case 'PINSCHER_SCHNAUZER': return RaceGroup.PINSCHER_SCHNAUZER;
      case 'PLEASURE': return RaceGroup.PLEASURE;
      case 'POINTING': return RaceGroup.POINTING;
      case 'RETRIEVAL': return RaceGroup.RETRIEVAL;
      case 'SHEPERD_HERDSMAN': return RaceGroup.SHEPERD_HERDSMAN;
      case 'SPITZ_PRIMITIVE': return RaceGroup.SPITZ_PRIMITIVE;
      case 'TECKEL': return RaceGroup.TECKEL;
      case 'TERRIER': return RaceGroup.TERRIER;
      default: return ''
    }
  }

}
