import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest, User } from "../../types/auth.type";
import { ApiResponse } from "../../types/http.types";
import { catchError, map, Observable, of, tap } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUser: User | null = null;
  private sessionChecked = false;

  private readonly baseUrl = `${environment.apiUrl}/auth`;
  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/admin/login`, data, {
      withCredentials: true,
    });
  }

  getCurrentUser(): Observable<User | null> {
    if (this.sessionChecked && this.currentUser) {
      return of(this.currentUser);
    }

    return this.http
      .get<ApiResponse>(`${environment.apiUrl}/admin/me`, {
        withCredentials: true,
      })
      .pipe(
        map((response: ApiResponse) => response.data as User),
        tap((user) => {
          this.currentUser = user;
          this.sessionChecked = true;
        }),
        catchError(() => {
          this.currentUser = null;
          this.sessionChecked = true;
          return of(null);
        })
      );
  }

  isAuthenticated(): Observable<boolean> {
    return this.getCurrentUser().pipe(map((user) => !!user));
  }

  logout() {
    this.currentUser = null;
    this.sessionChecked = false;
    return this.http.post("/api/auth/logout", {}, { withCredentials: true });
  }
}
