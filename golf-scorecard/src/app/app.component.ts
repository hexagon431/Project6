import { Component } from '@angular/core';
import {GetCoursesService} from "./course/get-courses.service";
import { OnInit } from '@angular/core';
import {GolfCourse} from "./model/golf-course";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private golfCourses;

  constructor(private golfCourseService: GetCoursesService){

  }

  ngOnInit(){



  }

  title = 'Golf Scorecard App';
}
