import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs';


describe('ApiService', () => {
  let service: ApiService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule], 
      providers: [ApiService]});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
  
  it('should send a POST request to the backend API with the given data', () => {
    // Mock HTTP client and response
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    const expectedResponse = { status: 'success' };
    httpClientSpy.post.and.returnValue(of(expectedResponse));

    // Create the service and data to send
    const taskService = new ApiService(httpClientSpy);
    const dataToSend = { taskId: 123 };

    // Call the deleteTask function
    taskService.deleteTask(dataToSend).subscribe((response: any) => {
      // Check that the HTTP client was called with the correct URL and data
      expect(httpClientSpy.post).toHaveBeenCalledWith(
        'http://localhost:8080/Task/deletetask',
        dataToSend
      );

      // Check that the response from the server was returned
      expect(response).toEqual(expectedResponse);
    });
  });
});
