import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AgencyDetails } from '../models/agency-details';
import { API } from '@issp/common';
import { AgencyDropdown } from '../models/agency-dropdown';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AgenciesService {
  route = `${API.BASE}${API.ADMIN.AGENCIES}`;

  constructor(private http: HttpClient) {}

  #emitAllItems: BehaviorSubject<Array<AgencyDetails>> = new BehaviorSubject<
    Array<AgencyDetails>
  >(new Array<AgencyDetails>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<AgencyDropdown>> =
    new BehaviorSubject<Array<AgencyDropdown>>(new Array<AgencyDropdown>());
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
    return this.http.get<AgencyDropdown[]>(uri).pipe(
      map((data) => {
        let list = new Array<AgencyDropdown>();
        list = data.map((e) => {
          const entity = new AgencyDropdown();
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
