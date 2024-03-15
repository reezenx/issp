import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@issp/shared/ui/libraries';
import { CoreService } from '@issp/shared/utils/services';

@Component({
  selector: 'app-side-two-steps',
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './side-two-steps.component.html',
})
export class AppSideTwoStepsComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService) {}
}
