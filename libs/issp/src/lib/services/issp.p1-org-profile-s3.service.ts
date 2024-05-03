import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  API,
  Environment,
  getAPIURL,
  ISSPP1OrgProfileS3Details,
  ISSPP1OrgProfileS3Info,
} from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class IsspP1OrgProfileS3Service {
  route = getAPIURL(this.env, API.USER.ISSP_P1ORGPROFILES3);

  constructor(private http: HttpClient, private env: Environment) {}

  #emitCurrentContextItem = new Subject<ISSPP1OrgProfileS3Details>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ISSPP1OrgProfileS3Details>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<ISSPP1OrgProfileS3Details>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findOne(id: string): Observable<ISSPP1OrgProfileS3Details> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ISSPP1OrgProfileS3Details>(uri).pipe(
      map((e) => {
        const entity = new ISSPP1OrgProfileS3Details();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(
    iSSPP1OrgProfileS3: ISSPP1OrgProfileS3Info
  ): Observable<ISSPP1OrgProfileS3Details> {
    const uri = `${this.route}/${iSSPP1OrgProfileS3.id}`;
    return this.http
      .put<ISSPP1OrgProfileS3Details>(uri, iSSPP1OrgProfileS3)
      .pipe(
        map((e) => {
          const entity = new ISSPP1OrgProfileS3Details();
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
    iSSPP1OrgProfileS3: ISSPP1OrgProfileS3Info
  ): Observable<ISSPP1OrgProfileS3Details> {
    const uri = `${this.route}`;
    return this.http
      .post<ISSPP1OrgProfileS3Details>(uri, iSSPP1OrgProfileS3)
      .pipe(
        map((e) => {
          const entity = new ISSPP1OrgProfileS3Details();
          entity.assign(e);
          return entity;
        }),
        tap((data) => {
          this.#emitLastAddedItem.next(data);
        })
      );
  }

  remove(id: string): Observable<ISSPP1OrgProfileS3Details> {
    const uri = `${this.route}/${id}`;
    return this.http.delete<ISSPP1OrgProfileS3Details>(uri);
  }
}
