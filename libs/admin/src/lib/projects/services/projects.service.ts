import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { ProjectDetails } from '../models/project-details';
import { API, ItemDropdown, Environment, getAPIURL } from '@issp/common';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  route = getAPIURL(this.env, API.ADMIN.PROJECTS);
  constructor(private http: HttpClient, private readonly env: Environment) {}

  #emitAllItems: BehaviorSubject<Array<ProjectDetails>> = new BehaviorSubject<
    Array<ProjectDetails>
  >(new Array<ProjectDetails>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitDropdownItems: BehaviorSubject<Array<ItemDropdown>> =
    new BehaviorSubject<Array<ItemDropdown>>(new Array<ItemDropdown>());
  dropdownItems$ = this.#emitDropdownItems.asObservable();

  #emitCurrentContextItem = new Subject<ProjectDetails>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ProjectDetails>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  #emitLastUpdatedItem = new Subject<ProjectDetails>();
  lastUpdatedItem$ = this.#emitLastUpdatedItem.asObservable();

  findAll() {
    return this.http.get<ProjectDetails[]>(this.route).pipe(
      map((data) => {
        let list = new Array<ProjectDetails>();
        list = data.map((e) => {
          const entity = new ProjectDetails();
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

  findOne(id: string): Observable<ProjectDetails> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ProjectDetails>(uri).pipe(
      map((e) => {
        const entity = new ProjectDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  updateOne(item: ProjectDetails): Observable<ProjectDetails> {
    const uri = `${this.route}/${item.id}`;
    return this.http.put<ProjectDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastUpdatedItem.next(data);
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(item: ProjectDetails): Observable<ProjectDetails> {
    const uri = `${this.route}`;
    return this.http.post<ProjectDetails>(uri, item).pipe(
      map((e) => {
        const entity = new ProjectDetails();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
