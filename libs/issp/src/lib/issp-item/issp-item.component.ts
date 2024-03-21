import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISSPDetails } from '../models/issp';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'issp-item',
  templateUrl: './issp-item.component.html',
  styleUrl: './issp-item.component.scss',
})
export class IsspItemComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  issp: ISSPDetails;

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ issp }) => {
      this.issp = issp;
    });
  }
}
