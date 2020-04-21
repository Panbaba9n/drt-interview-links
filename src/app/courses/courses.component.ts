import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/services/course.service';
import { Course } from '../shared/models/course.interface';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses$ = this.courseService.courses$;
  validatingForm: FormGroup = new FormGroup({
    loginFormModalEmail: new FormControl('', Validators.email),
    loginFormModalPassword: new FormControl('', Validators.required)
  });

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.getCourses();
  }

  editCourse(course: Course) {
    console.log('editCourse: ', course);

    // todo: open modal and after submit update the course, don't have time so let's pretend
    const editedCourse = {
      ...course,
      title: 'New value'
    };

    this.courseService.updateCourse(editedCourse)
      .subscribe(
        res => this.courseService.getCourses(),
        error => console.error(error)
      );
  }

  deleteCourse(courseId: number) {
    this.courseService.deleteCourse(courseId)
      .subscribe(
        () => this.courseService.getCourses(),
        error => console.error(error)
      );
  }

}
