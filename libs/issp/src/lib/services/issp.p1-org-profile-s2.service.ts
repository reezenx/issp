import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  API,
  Environment,
  getAPIURL,
  ISSPP1OrgProfileS2Details,
  ISSPP1OrgProfileS2Info,
} from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class IsspP1OrgProfileS2Service {
  route = getAPIURL(this.env, API.USER.ISSP_P1ORGPROFILES2);

  constructor(private http: HttpClient, private env: Environment) {}

  #emitCurrentContextItem = new Subject<ISSPP1OrgProfileS2Details>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ISSPP1OrgProfileS2Details>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<ISSPP1OrgProfileS2Details>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findOne(id: string): Observable<ISSPP1OrgProfileS2Details> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ISSPP1OrgProfileS2Details>(uri).pipe(
      map((e) => {
        const entity = new ISSPP1OrgProfileS2Details();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(
    isspP1OrgProfileS2: ISSPP1OrgProfileS2Info
  ): Observable<ISSPP1OrgProfileS2Details> {
    const uri = `${this.route}/${isspP1OrgProfileS2.id}`;
    return this.http
      .put<ISSPP1OrgProfileS2Details>(uri, isspP1OrgProfileS2)
      .pipe(
        map((e) => {
          const entity = new ISSPP1OrgProfileS2Details();
          entity.assign(e);
          return entity;
        }),
        tap((data) => {
          this.#emitLastUpdatedItem.next(data);
          this.#emitCurrentContextItem.next(data);
        })
      );
  }

  createOne(
    isspP1OrgProfileS2: ISSPP1OrgProfileS2Info
  ): Observable<ISSPP1OrgProfileS2Details> {
    const uri = `${this.route}`;
    return this.http
      .post<ISSPP1OrgProfileS2Details>(uri, isspP1OrgProfileS2)
      .pipe(
        map((e) => {
          const entity = new ISSPP1OrgProfileS2Details();
          entity.assign(e);
          return entity;
        }),
        tap((data) => {
          this.#emitLastAddedItem.next(data);
        })
      );
  }

  remove(id: string): Observable<ISSPP1OrgProfileS2Details> {
    const uri = `${this.route}/${id}`;
    return this.http.delete<ISSPP1OrgProfileS2Details>(uri);
  }
}
