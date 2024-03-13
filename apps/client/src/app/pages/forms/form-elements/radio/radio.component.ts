import { Component } from '@angular/core';
import { MaterialModule } from '@issp/shared/ui/libraries';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './radio.component.html',
})
export class AppRadioComponent {
  constructor() {}

  //   ngModel
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
