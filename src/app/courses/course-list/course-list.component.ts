import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Course } from '../../shared/models/course.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() courses: Course[];
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
