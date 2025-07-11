import { Injectable } from '@angular/core';
import {ApiResponse} from "../../types/http.types";
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  formatError(error: HttpErrorResponse): ApiResponse {
    let errorResponse: ApiResponse;

    // Try casting
    if (error.error && typeof error.error === 'object' && 'statusCode' in error.error && 'message' in error.error) {
      errorResponse = error.error as ApiResponse;

      // If the status code is not 4xx, override the message
      if (errorResponse.statusCode < 400 || errorResponse.statusCode > 499) {
        errorResponse.message = "Something went wrong";
        errorResponse.data = null;
      }
    } else {
      // If it cannot be casted to ApiResponse, create a fresh one
      errorResponse = {
        statusCode: error.status || 500,
        isSuccess: false,
        message: "Something went wrong",
        data: null
      };
    }
    return errorResponse;
  }
}
