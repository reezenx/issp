import { Injectable } from '@angular/core';
import { ISSP } from './issp';
import { courseList } from './issp-data';

@Injectable({
  providedIn: 'root',
})
export class IsspService {
  public course = courseList;
  public getCourse(): ISSP[] {
    return this.course;
  }
}
