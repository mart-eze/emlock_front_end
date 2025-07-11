import { TestBed } from "@angular/core/testing"
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {provideRouter, Router, withComponentInputBinding} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth/auth.service";
import { HelperService } from "../../services/helper/helper.service";

describe("Login Component", () => {
    let component: LoginComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LoginComponent,ReactiveFormsModule,],
            providers: [ provideRouter([], withComponentInputBinding()),
                { provide: ToastrService, useValue: { error: jasmine.createSpy('error') } },
                { provide: AuthService, useValue: { login: jasmine.createSpy('login').and.returnValue({ subscribe: () => {} }) } },
                { provide: HelperService, useValue: { formatError: jasmine.createSpy('formatError') } }]
        })
        .compileComponents();

        let fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    })

    it('should not show and hide password', () => {
        expect(component.show).toBeFalse()
        component.showPassword();
        expect(component.show).toBeTruthy();
        component.showPassword();
        expect(component.show).toBeFalse()
    })

    it('should not login because of form is invalid', () => {
        component.login()
        expect(component.loginForm.valid).toBeFalsy()
        expect(component.loginForm.controls['username'].valid).toBeFalsy()
        expect(component.loginForm.controls['password'].valid).toBeFalsy()

        component.loginForm.setValue({
            username: "ab",
            password: "123"
        })

        expect(component.loginForm.valid).toBeFalsy()
        expect(component.loginForm.controls["username"].errors?.["minlength"]).toBeTruthy();
        expect(component.loginForm.controls["password"].errors?.["minlength"]).toBeTruthy();

    })
})