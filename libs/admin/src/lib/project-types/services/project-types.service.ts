import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ProjectTypeDetails } from '../models/project-type-details';
import { API, Environment, ItemDropdown } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class ProjectTypesService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.PROJECT_TYPES}`;

  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<ProjectTypeDetails>> =
    new BehaviorSubject<Array<ProjectTypeDetails>>(
      new Array<ProjectTypeDetails>()
    );
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<ProjectTypeDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ProjectTypeDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<ProjectTypeDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<ProjectTypeDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<ProjectTypeDetails>();
        list = data.map((e) => {
          const entity = new ProjectTypeDetails();
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

  findOne(id: string): Observable<ProjectTypeDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ProjectTypeDetails>(uri).pipe(
      map((e) => {
        const entity = new ProjectTypeDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(item: ProjectTypeDetails): Observable<ProjectTypeDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<ProjectTypeDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectTypeDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }
  createOne(item: ProjectTypeDetails): Observable<ProjectTypeDetails> {
    const uri = `${this.route}`;
    return this.http.post<ProjectTypeDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectTypeDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
