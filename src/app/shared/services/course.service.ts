import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Course } from '../models/course.interface';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private API_URL = `${environment.apiUrl}courses`;
  private courseSubject$ = new Subject<Course[]>();
  courses$ = this.courseSubject$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getCourses() {
    this.http.get<Course[]>(this.API_URL).subscribe(
      courses => this.courseSubject$.next(courses)
    );
  }

  deleteCourse(courseId: number) {
    return this.http.delete(`${this.API_URL}/${courseId}`);
  }

  updateCourse(course: Course) {
    return this.http.put(`${this.API_URL}/${course.id}`, course);
  }
}
