import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';


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
  it('should have getData function', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getData).toBeTruthy();
   });
});
