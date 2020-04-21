import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { CourseService } from './course.service';
import { Course } from '../models/course.interface';

describe('CourseService', () => {
  let service: CourseService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CourseService,
      ]
    });
    service = TestBed.inject(CourseService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttoClient.get', () => {
    const testData: Course = {
      "id": 10,
      "title": "Test title",
      "duration": 1,
      "duration-unit": "day",
      "description": "Test description"
    };

    httpClient.get<Course>('/courses').subscribe(data => expect(data).toEqual(testData));

    const req = httpTestingController.expectOne('/courses');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });
});
