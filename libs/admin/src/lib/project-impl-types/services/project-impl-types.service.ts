import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  API,
  Environment,
  IsKeyUniqueValidatorOptions,
  ItemDropdown,
  ValidateUniqueKeyFn,
} from '@issp/common';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ProjectImplementationTypeDetails } from '../models/project-impl-type-details';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class ProjectImplementationTypeService {
  route = `${this.env.url.api}${API.BASE}${API.ADMIN.IMPL_TYPES}`;
  constructor(private http: HttpClient, private readonly env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<ProjectImplementationTypeDetails>> =
    new BehaviorSubject<Array<ProjectImplementationTypeDetails>>(
      new Array<ProjectImplementationTypeDetails>()
    );
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<ProjectImplementationTypeDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ProjectImplementationTypeDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<ProjectImplementationTypeDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<ProjectImplementationTypeDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<ProjectImplementationTypeDetails>();
        list = data.map((e) => {
          const entity = new ProjectImplementationTypeDetails();
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

  findOne(id: string): Observable<ProjectImplementationTypeDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ProjectImplementationTypeDetails>(uri).pipe(
      map((e) => {
        const entity = new ProjectImplementationTypeDetails();
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

  updateOne(
    item: ProjectImplementationTypeDetails
  ): Observable<ProjectImplementationTypeDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<ProjectImplementationTypeDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectImplementationTypeDetails();
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
    item: ProjectImplementationTypeDetails
  ): Observable<ProjectImplementationTypeDetails> {
    const uri = `${this.route}`;
    return this.http.post<ProjectImplementationTypeDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectImplementationTypeDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
