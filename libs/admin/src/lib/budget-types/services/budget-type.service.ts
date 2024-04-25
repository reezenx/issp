import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { BudgetTypeDetails } from '../models/budget-type-details';
import {
  API,
  Environment,
  IsKeyUniqueValidatorOptions,
  ValidateUniqueKeyFn,
  ItemDropdown,
} from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class BudgetTypeService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.BUDGET_TYPES}`;
  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<BudgetTypeDetails>> =
    new BehaviorSubject<Array<BudgetTypeDetails>>(
      new Array<BudgetTypeDetails>()
    );
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<BudgetTypeDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<BudgetTypeDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<BudgetTypeDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<BudgetTypeDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<BudgetTypeDetails>();
        list = data.map((e) => {
          const entity = new BudgetTypeDetails();
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

  findOne(id: string): Observable<BudgetTypeDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<BudgetTypeDetails>(uri).pipe(
      map((e) => {
        const entity = new BudgetTypeDetails();
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
    const uri = `${this.route}/exists/${code}?ignoreId=${props.ignoreId}`;
    return this.http.get<boolean>(uri).pipe(
      map((data) => {
        return !data;
      })
    );
  };

  updateOne(item: BudgetTypeDetails): Observable<BudgetTypeDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<BudgetTypeDetails>(uri, item).pipe(
      map((e) => {
        const entity = new BudgetTypeDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(item: BudgetTypeDetails): Observable<BudgetTypeDetails> {
    const uri = `${this.route}`;
    return this.http.post<BudgetTypeDetails>(uri, item).pipe(
      map((e) => {
        const entity = new BudgetTypeDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
