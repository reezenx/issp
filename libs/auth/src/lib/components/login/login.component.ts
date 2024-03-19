import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { MaterialModule } from '@issp/common/ui/libraries';
import { CoreService } from '@issp/common/ui/services';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issp-boxed-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
})
export class IsspLoginComponent {
  options = this.settings.getOptions();

  constructor(
    private settings: CoreService,
    private router: Router,
    private authService: AuthService
  ) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  loading = false;

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.loading) {
      return;
    }

    this.loading = true;

    const user = this.form.value;

    this.authService
      .login(user)
      .pipe(take(1))
      .subscribe(
        () => this.authService.redirectToCallback(),
        () => {
          this.loading = false;

          this.form.patchValue({
            password: '',
          });
        }
      );
  }
}
