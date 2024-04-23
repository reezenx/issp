import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { CategoryDetails } from '../models/category-details';
import { API, ItemDropdown, Environment, ValidateUniqueKeyFn, IsKeyUniqueValidatorOptions } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.CATEGORIES}`;
  constructor(private http: HttpClient, private readonly env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<CategoryDetails>> = new BehaviorSubject<
    Array<CategoryDetails>
  >(new Array<CategoryDetails>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<CategoryDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<CategoryDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<CategoryDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<CategoryDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<CategoryDetails>();
        list = data.map((e) => {
          const entity = new CategoryDetails();
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

  findOne(id: string): Observable<CategoryDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<CategoryDetails>(uri).pipe(
      map((e) => {
        const entity = new CategoryDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  isCodeUnique: ValidateUniqueKeyFn<IsKeyUniqueValidatorOptions> = (
    code: string,
    props: IsKeyUniqueValidatorOptions
  ): Observable<boolean> => {
    const uri = `${this.route}/exists/${code}`;
    return this.http.get<boolean>(uri).pipe(
      map((data) => {
        return !data;
      })
    );
  };

  updateOne(item: CategoryDetails): Observable<CategoryDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<CategoryDetails>(uri, item).pipe(
      map((e) => {
        const entity = new CategoryDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(item: CategoryDetails): Observable<CategoryDetails> {
    const uri = `${this.route}`;
    return this.http.post<CategoryDetails>(uri, item).pipe(
      map((e) => {
        const entity = new CategoryDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
