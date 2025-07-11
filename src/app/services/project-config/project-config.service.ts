import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseV2, ProjectConfig } from '../../interface/common';

@Injectable({
  providedIn: 'root'
})
export class ProjectConfigService {

  private readonly baseUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}


  getProjectConfigs(): Observable<ApiResponseV2<ProjectConfig[]>> {
    return this.http.get<ApiResponseV2<ProjectConfig[]>>(`${this.baseUrl}/project-config`);
  }
}
