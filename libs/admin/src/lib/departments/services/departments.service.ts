import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { DepartmentDetails } from '../models/department-details';
import { HttpClient } from '@angular/common/http';
import { API, Environment, ItemDropdown } from '@issp/common';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.DEPARTMENTS}`;
  constructor(private http: HttpClient, private readonly env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<DepartmentDetails>> =
    new BehaviorSubject<Array<DepartmentDetails>>(
      new Array<DepartmentDetails>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<DepartmentDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<DepartmentDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<DepartmentDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<DepartmentDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<DepartmentDetails>();
        list = data.map((e) => {
          const entity = new DepartmentDetails();
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

  findOne(id: string): Observable<DepartmentDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<DepartmentDetails>(uri).pipe(
      map((e) => {
        const entity = new DepartmentDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(item: DepartmentDetails): Observable<DepartmentDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<DepartmentDetails>(uri, item).pipe(
      map((e) => {
        const entity = new DepartmentDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(item: DepartmentDetails): Observable<DepartmentDetails> {
    const uri = `${this.route}`;
    return this.http.post<DepartmentDetails>(uri, item).pipe(
      map((e) => {
        const entity = new DepartmentDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
