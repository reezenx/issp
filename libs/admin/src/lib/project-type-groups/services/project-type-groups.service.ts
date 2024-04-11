import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { ProjectTypeGroupDetails } from '../models/project-type-group-details';
import { API, Environment, ItemDropdown } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class ProjectTypeGroupsService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.PROJECT_TYPES_GROUPS}`;
  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<ProjectTypeGroupDetails>> =
    new BehaviorSubject<Array<ProjectTypeGroupDetails>>(
      new Array<ProjectTypeGroupDetails>()
    );
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<ProjectTypeGroupDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ProjectTypeGroupDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<ProjectTypeGroupDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<ProjectTypeGroupDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<ProjectTypeGroupDetails>();
        list = data.map((e) => {
          const entity = new ProjectTypeGroupDetails();
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

  findOne(id: string): Observable<ProjectTypeGroupDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ProjectTypeGroupDetails>(uri).pipe(
      map((e) => {
        const entity = new ProjectTypeGroupDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(
    item: ProjectTypeGroupDetails
  ): Observable<ProjectTypeGroupDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<ProjectTypeGroupDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectTypeGroupDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(
    item: ProjectTypeGroupDetails
  ): Observable<ProjectTypeGroupDetails> {
    const uri = `${this.route}`;
    return this.http.post<ProjectTypeGroupDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectTypeGroupDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
