import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LoginRequest } from "../../types/auth.type";
import { AuthService } from "../../services/auth/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { HelperService } from "../../services/helper/helper.service";
import { ApiResponse } from "../../types/http.types";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-login",
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  public show: boolean = false;
  public loginForm: FormGroup;
  public submitting = false;

  constructor(
    public router: Router,
    private toast: ToastrService,
    private authService: AuthService,
    private helperService: HelperService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      remember: new FormControl(false),
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  login() {
    this.loginForm.setErrors(null);
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.submitting = true;

    const request: LoginRequest = this.loginForm.value;
    if (environment.production) {
      const encodedPassword = btoa(request.password);
      request.password = encodedPassword;
    }

    if (this.loginForm.valid) {
      this.authService.login(request).subscribe({
        next: (response: ApiResponse) => {
          this.router.navigate(["/dashboard/default"]);
          this.submitting = false;
        },
        complete: () => {},
        error: (error: HttpErrorResponse) => {
          const errorResponse: ApiResponse =
            this.helperService.formatError(error);
          this.submitting = false;
          this.toast.error(errorResponse.message, "", {
            positionClass: "toast-top-right",
            closeButton: true,
            timeOut: 2000,
          });
        },
      });
    }
  }
}
