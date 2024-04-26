import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AgencyDetails } from '../models/agency-details';
import {
  ItemDropdown,
  API,
  Environment,
  IsKeyUniqueValidatorOptions,
  ValidateUniqueKeyFn,
  getAPIURL,
} from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AgenciesService {
  route = getAPIURL(this.env, API.ADMIN.AGENCIES);

  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<AgencyDetails>> = new BehaviorSubject<
    Array<AgencyDetails>
  >(new Array<AgencyDetails>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<AgencyDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<AgencyDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<AgencyDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<AgencyDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<AgencyDetails>();
        list = data.map((e) => {
          const entity = new AgencyDetails();
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
    return this.http.get<ItemDropdown[]>(uri).pipe(
      map((data) => {
        let list = new Array<ItemDropdown>();
        list = data.map((e) => {
          const entity = new ItemDropdown();
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

  findOne(id: string): Observable<AgencyDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<AgencyDetails>(uri).pipe(
      map((e) => {
        const entity = new AgencyDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  isEmailUnique: ValidateUniqueKeyFn<IsKeyUniqueValidatorOptions> = (
    email: string,
    props: IsKeyUniqueValidatorOptions
  ): Observable<boolean> => {
    const uri = `${this.route}/exists/${email}?ignoreId=${props.ignoreId}`;
    return this.http.get<boolean>(uri).pipe(
      map((data) => {
        return !data;
      })
    );
  };

  updateOne(item: AgencyDetails): Observable<AgencyDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<AgencyDetails>(uri, item).pipe(
      map((e) => {
        const entity = new AgencyDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(item: AgencyDetails): Observable<AgencyDetails> {
    const uri = `${this.route}`;
    return this.http.post<AgencyDetails>(uri, item).pipe(
      map((e) => {
        const entity = new AgencyDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
