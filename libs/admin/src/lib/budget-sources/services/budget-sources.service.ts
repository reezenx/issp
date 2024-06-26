import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { BudgetSourceDetails } from '../models/budget-source-details';
import {
  API,
  Environment,
  IsKeyUniqueValidatorOptions,
  ValidateUniqueKeyFn,
  ItemDropdown,
  getAPIURL,
} from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class BudgetSourcesService {
  route = getAPIURL(this.env, API.ADMIN.BUDGET_SOURCES);
  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<BudgetSourceDetails>> =
    new BehaviorSubject<Array<BudgetSourceDetails>>(
      new Array<BudgetSourceDetails>()
    );
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<BudgetSourceDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<BudgetSourceDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<BudgetSourceDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<BudgetSourceDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<BudgetSourceDetails>();
        list = data.map((e) => {
          const entity = new BudgetSourceDetails();
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

  findOne(id: string): Observable<BudgetSourceDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<BudgetSourceDetails>(uri).pipe(
      map((e) => {
        const entity = new BudgetSourceDetails();
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

  updateOne(item: BudgetSourceDetails): Observable<BudgetSourceDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<BudgetSourceDetails>(uri, item).pipe(
      map((e) => {
        const entity = new BudgetSourceDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(item: BudgetSourceDetails): Observable<BudgetSourceDetails> {
    const uri = `${this.route}`;
    return this.http.post<BudgetSourceDetails>(uri, item).pipe(
      map((e) => {
        const entity = new BudgetSourceDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
