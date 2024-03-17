import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@issp/common';

@Component({
  selector: 'issp-error',
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './error.component.html',
})
export class IsspErrorComponent {}
