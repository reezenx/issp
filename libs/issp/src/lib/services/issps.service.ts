import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISSP } from '@prisma/client';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ISSPDetails } from '../models/issp-details';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class IsspsService {
  route = `api/v1/issps`;

  constructor(private http: HttpClient) {}

  #emitAllItems: BehaviorSubject<Array<ISSPDetails>> = new BehaviorSubject<
    Array<ISSPDetails>
  >(new Array<ISSPDetails>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitCurrentContextItem = new Subject<ISSPDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ISSPDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<ISSPDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<ISSPDetails[]>(this.route).pipe(
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

  findOne(id: string): Observable<ISSPDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ISSPDetails>(uri).pipe(
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

  updateOne(issp: ISSPDetails): Observable<ISSPDetails> {
    const uri = `${this.route}/${issp.id}`;
    issp.startYear = new Date(issp.startYear).getFullYear();
    issp.endYear = new Date(issp.endYear).getFullYear();
    return this.http.put<ISSPDetails>(uri, issp).pipe(
      map((e) => {
        const entity = new ISSPDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }
  createOne(issp: ISSPDetails): Observable<ISSPDetails> {
    const uri = `${this.route}`;
    issp.startYear = new Date(issp.startYear).getFullYear();
    issp.endYear = new Date(issp.endYear).getFullYear();
    return this.http.post<ISSPDetails>(uri, issp).pipe(
      map((e) => {
        const entity = new ISSPDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
