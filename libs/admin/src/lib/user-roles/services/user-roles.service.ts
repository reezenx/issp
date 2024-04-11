import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { UserRoleDetails } from '../models/user-role-details';
import { API, Environment, ItemDropdown } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class UserRolesService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.USER_ROLES}`;

  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<UserRoleDetails>> = new BehaviorSubject<
    Array<UserRoleDetails>
  >(new Array<UserRoleDetails>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<UserRoleDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<UserRoleDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<UserRoleDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<UserRoleDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<UserRoleDetails>();
        list = data.map((e) => {
          const entity = new UserRoleDetails();
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

  findOne(id: string): Observable<UserRoleDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<UserRoleDetails>(uri).pipe(
      map((e) => {
        const entity = new UserRoleDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(item: UserRoleDetails): Observable<UserRoleDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<UserRoleDetails>(uri, item).pipe(
      map((e) => {
        const entity = new UserRoleDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }
  createOne(item: UserRoleDetails): Observable<UserRoleDetails> {
    const uri = `${this.route}`;
    return this.http.post<UserRoleDetails>(uri, item).pipe(
      map((e) => {
        const entity = new UserRoleDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
