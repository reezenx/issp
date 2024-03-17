import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '@issp/common';
import { CoreService } from '@issp/common';

@Component({
  selector: 'issp-boxed-forgot-password',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
})
export class IsspForgotPasswordComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService, private router: Router) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    this.router.navigate(['/dashboards/dashboard1']);
  }
}
