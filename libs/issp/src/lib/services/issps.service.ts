import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  API,
  Environment,
  getAPIURL,
  ISSPDetails,
  IsspDropdown,
} from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class IsspsService {
  route = getAPIURL(this.env, API.USER.ISSPS);

  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<ISSPDetails>> = new BehaviorSubject<
    Array<ISSPDetails>
  >(new Array<ISSPDetails>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<IsspDropdown>> =
    new BehaviorSubject<Array<IsspDropdown>>(new Array<IsspDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

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

  findAllDropdowns() {
    const uri = `${this.route}/dropdown`;
    return this.http.get<IsspDropdown[]>(uri).pipe(
      map((data) => {
        let list = new Array<IsspDropdown>();
        list = data.map((e) => {
          const entity = new IsspDropdown();
          entity.assign(e);
          return entity;
        });
        return list;
      }),
      tap((data) => {
        this.#emitDropdownItems.next(data);
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
