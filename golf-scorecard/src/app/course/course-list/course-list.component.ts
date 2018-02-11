import { Component, OnInit } from '@angular/core';
import {GolfCourse} from "../../model/golf-course";
import {GetCoursesService} from "../get-courses.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  private courses: GolfCourse[] = [];
  private zip: number;
  private radius: number;

  constructor(private golfCourseService: GetCoursesService) {  }

  ngOnInit() {
    this.golfCourseService.getCourses(4, 5, 5).subscribe((golfCourses: GolfCourse[]) => {
      this.courses = golfCourses;
      console.log(this.courses);
    });
  }

}
