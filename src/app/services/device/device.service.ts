import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponseV2, PaginatedResult } from '../../interface/common';
import { Observable } from 'rxjs';
import { DeviceList } from '../../data/dashboard/dashboard.type';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private readonly baseUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

    getPaginatedDevices(page: number, pageSize: number): Observable<ApiResponseV2<PaginatedResult<DeviceList>>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
      return this.http.get<ApiResponseV2<PaginatedResult<DeviceList>>>(`${this.baseUrl}/device/paginated`, { params });
    }
  }
