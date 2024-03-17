import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@issp/common';
import { CoreService } from '@issp/common';

@Component({
  selector: 'issp-boxed-two-steps',
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './two-steps.component.html',
})
export class IsspTwoStepsComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService) {}
}
