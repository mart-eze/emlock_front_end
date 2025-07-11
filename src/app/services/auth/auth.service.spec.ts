import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { LoginRequest } from "../../types/auth.type";
import { ApiResponse } from "../../types/http.types";
import { environment } from "../../environments/environment";

describe("AuthService", () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should send login request and return ApiRequest", () => {
    const mockLoginRequest: LoginRequest = {
      username: "test@example.com",
      password: "password123",
      remember: false,
    };

    const mockResponse: ApiResponse = {
      isSuccess: true,
      statusCode: 200,
      message: "Login successful",
      data: {
        token: "fake-jwt-token",
      },
    };

    service.login(mockLoginRequest).subscribe((response: ApiResponse) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/auth/admin/login`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(mockLoginRequest);

    req.flush(mockResponse);
  });
});
