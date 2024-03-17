import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@issp/common/ui/libraries';
import { CoreService } from '@issp/common/ui/services';

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
