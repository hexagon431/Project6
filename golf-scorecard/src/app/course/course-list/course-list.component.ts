import { Component, OnInit } from '@angular/core';
import {GolfCourse} from "../../model/golf-course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Array<GolfCourse>;
  zip: number = 84043;
  radius: number = 30;

  constructor() { }

  ngOnInit() {
  }

}
