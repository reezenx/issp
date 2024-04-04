import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { BudgetSourceDetails } from '../models/budget-source-details';
import { API, Environment } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class BudgetSourceService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.BUDGET_TYPES}`;
  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<BudgetSourceDetails>> =
    new BehaviorSubject<Array<BudgetSourceDetails>>(
      new Array<BudgetSourceDetails>()
    );
  allItems$ = this.#emitAllItems.asObservable();

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
