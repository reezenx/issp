import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { UserDetails } from '../models/user-details';
import { API } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  route = `${API.BASE}${API.ADMIN.USERS}`;

  constructor(private http: HttpClient) {}

  #emitAllItems: BehaviorSubject<Array<UserDetails>> = new BehaviorSubject<
    Array<UserDetails>
  >(new Array<UserDetails>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitCurrentContextItem = new Subject<UserDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<UserDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<UserDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<UserDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<UserDetails>();
        list = data.map((e) => {
          const entity = new UserDetails();
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

  findOne(id: string): Observable<UserDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<UserDetails>(uri).pipe(
      map((e) => {
        const entity = new UserDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(item: UserDetails): Observable<UserDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<UserDetails>(uri, item).pipe(
      map((e) => {
        const entity = new UserDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }
  createOne(item: UserDetails): Observable<UserDetails> {
    const uri = `${this.route}`;
    return this.http.post<UserDetails>(uri, item).pipe(
      map((e) => {
        const entity = new UserDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
