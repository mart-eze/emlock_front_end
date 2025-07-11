import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should format client error response correctly', () => {
    const mockError = new HttpErrorResponse({
      status: 400,
      error: {
        statusCode: 400,
        isSuccess: false,
        message: 'Invalid request',
        data: null
      }
    });

    const result = service.formatError(mockError);
    expect(result.statusCode).toBe(400);
    expect(result.message).toBe('Invalid request');
    expect(result.isSuccess).toBeFalse();
  });

  it('should override message for server-side error', () => {
    const mockError = new HttpErrorResponse({
      status: 500,
      error: {
        statusCode: 500,
        isSuccess: false,
        message: 'Server exploded',
        data: {}
      }
    });

    const result = service.formatError(mockError);
    expect(result.statusCode).toBe(500);
    expect(result.message).toBe('Something went wrong');
    expect(result.data).toBeNull();
  });

  it('should handle malformed error structure', () => {
    const mockError = new HttpErrorResponse({
      status: 0,
      error: 'Unexpected error'
    });

    const result = service.formatError(mockError);
    expect(result.statusCode).toBe(500);
    expect(result.message).toBe('Something went wrong');
    expect(result.isSuccess).toBeFalse();
    expect(result.data).toBeNull();
  });
});
