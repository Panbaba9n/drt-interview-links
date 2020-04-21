import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Course } from '../../shared/models/course.interface';

@Component({
  selector: '[appCourse]',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
  @Input() course: Course;
  @Output() editCourseEvent = new EventEmitter<Course>();
  @Output() deleteCourseEvent = new EventEmitter<number>();

  constructor() { }

  sendEditCourseEvent(course: Course) {
    this.editCourseEvent.emit(course);
  }

  sendDeleteCourseEvent(courseId: number) {
    this.deleteCourseEvent.emit(courseId);
  }

}
