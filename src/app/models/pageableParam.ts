import {HttpParams} from "@angular/common/http";
import {PersonShortDto} from "./Person";

export class PageableParam{
  static setUp(page: number, size: number, sort: string){
    return new HttpParams().set('page', page).set('size',size).set('sort', sort)
  }

}
export interface PagedResponse{
  content: PersonShortDto[];
  pageable: object;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: object;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
