import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ProjectCategoryDetails } from '../models/project-category-details';
import { API, Environment, IsKeyUniqueValidatorOptions, ItemDropdown, ValidateUniqueKeyFn } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class ProjectCategoriesService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.PROJECT_CATEGORIES}`;

  constructor(private http: HttpClient, private env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<ProjectCategoryDetails>> =
    new BehaviorSubject<Array<ProjectCategoryDetails>>(
      new Array<ProjectCategoryDetails>()
    );
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<ProjectCategoryDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ProjectCategoryDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<ProjectCategoryDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<ProjectCategoryDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<ProjectCategoryDetails>();
        list = data.map((e) => {
          const entity = new ProjectCategoryDetails();
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
  
  findOne(id: string): Observable<ProjectCategoryDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ProjectCategoryDetails>(uri).pipe(
      map((e) => {
        const entity = new ProjectCategoryDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(item: ProjectCategoryDetails): Observable<ProjectCategoryDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<ProjectCategoryDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectCategoryDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }
  createOne(item: ProjectCategoryDetails): Observable<ProjectCategoryDetails> {
    const uri = `${this.route}`;
    return this.http.post<ProjectCategoryDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectCategoryDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
