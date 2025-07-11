import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponseV2, PaginatedResult } from '../../interface/common';
import { ShopkeeperOverview } from '../../data/dashboard/dashboard.type';

@Injectable({
  providedIn: 'root'
})
export class AppUsersService {

  private readonly baseUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

    getPaginatedUsers(role: number, page: number, pageSize: number): Observable<ApiResponseV2<PaginatedResult<ShopkeeperOverview>>> {
    const params = new HttpParams()
      .set('user_role', role.toString())
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
      return this.http.get<ApiResponseV2<PaginatedResult<ShopkeeperOverview>>>(`${this.baseUrl}/admin/paginated`, { params });
    }
}
