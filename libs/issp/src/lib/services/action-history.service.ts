import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ActionHistoryInfo, API, ISSPDetails } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class ActionHistoryService {
  route = `${API.BASE}${API.USER.ACTION_HISTORY}`;

  constructor(private http: HttpClient) {}

  #emitAllItems: BehaviorSubject<Array<ActionHistoryInfo>> =
    new BehaviorSubject<Array<ActionHistoryInfo>>(
      new Array<ActionHistoryInfo>()
    );
  allItems$ = this.#emitAllItems.asObservable();

  #emitCurrentContextItem = new Subject<ActionHistoryInfo>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ActionHistoryInfo>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  findAll(isspId: string) {
    const uri = `${this.route}/${isspId}`;
    return this.http.get<ActionHistoryInfo[]>(uri).pipe(
      map((data) => {
        let list = new Array<ActionHistoryInfo>();
        list = data.map((e) => {
          const entity = new ActionHistoryInfo();
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

  findOne(id: string): Observable<ActionHistoryInfo> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ActionHistoryInfo>(uri).pipe(
      map((e) => {
        const entity = new ActionHistoryInfo();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(issp: ISSPDetails): Observable<ActionHistoryInfo> {
    const uri = `${this.route}`;
    issp.startYear = new Date(issp.startYear).getFullYear();
    issp.endYear = new Date(issp.endYear).getFullYear();
    return this.http.post<ActionHistoryInfo>(uri, issp).pipe(
      map((e) => {
        const entity = new ActionHistoryInfo();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
