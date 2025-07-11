import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "../services/auth/auth.service";
import {map, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.getCurrentUser().pipe(
        map(user => {
          if (user && user.role === 'Admin') {
            return true;
          }
          this.router.navigate(['/auth/login']);
          return false;
        }),
        catchError(() => {
          this.router.navigate(['/auth/login']);
          return of(false);
        })
    );
  }
}
