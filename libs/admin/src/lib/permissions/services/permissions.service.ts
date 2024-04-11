import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { PermissionDetails } from '../models/permission-details';
import { API, Environment, ItemDropdown } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.PERMISSIONS}`;

  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<PermissionDetails>> =
    new BehaviorSubject<Array<PermissionDetails>>(
      new Array<PermissionDetails>()
    );
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<PermissionDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<PermissionDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<PermissionDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<PermissionDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<PermissionDetails>();
        list = data.map((e) => {
          const entity = new PermissionDetails();
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

  findOne(id: string): Observable<PermissionDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<PermissionDetails>(uri).pipe(
      map((e) => {
        const entity = new PermissionDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(item: PermissionDetails): Observable<PermissionDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<PermissionDetails>(uri, item).pipe(
      map((e) => {
        const entity = new PermissionDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(item: PermissionDetails): Observable<PermissionDetails> {
    const uri = `${this.route}`;
    return this.http.post<PermissionDetails>(uri, item).pipe(
      map((e) => {
        const entity = new PermissionDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
