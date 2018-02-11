import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetCoursesService} from "../get-courses.service";
import {GolfCourse} from "../../model/golf-course";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  private courseId: number;
  private course: GolfCourse;


  constructor(private _route: ActivatedRoute, private golfCourseService: GetCoursesService) {
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.courseId = +this._route.snapshot.paramMap.get('id');

    this.golfCourseService.getCourse(this.courseId).subscribe((course: GolfCourse) => {
      this.course = course;
      console.log(this.course);
    });
  }

}
