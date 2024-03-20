import { Injectable } from '@angular/core';
import { ISSP } from './issp';
import { isspList } from './issp-data';

@Injectable({
  providedIn: 'root',
})
export class IsspService {
  public issp = isspList;
  public getIssps(): ISSP[] {
    return this.issp;
  }
}
