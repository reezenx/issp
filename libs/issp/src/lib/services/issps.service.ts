import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISSP } from '@prisma/client';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ISSPDetails } from '../models/issp';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class IsspService {
  route = `api/v1/issps`;

  constructor(private http: HttpClient) {}

  #emitAllItems: BehaviorSubject<Array<ISSP>> = new BehaviorSubject<
    Array<ISSP>
  >(new Array<ISSP>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitCurrentContextItem = new Subject<ISSP>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ISSP>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<ISSP>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<ISSP[]>(this.route).pipe(
      map((data) => {
        let list = new Array<ISSPDetails>();
        list = data.map((e) => {
          const entity = new ISSPDetails();
          entity.assign(e);
          return entity;
        });
        return list;
      }),
      tap((data) => {
        this.#emitAllItems.next(data);
      })
    );
  }

  findOne(id: string): Observable<ISSP> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ISSP>(uri).pipe(
      map((e) => {
        const entity = new ISSPDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }
}
