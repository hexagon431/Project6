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
    this.golfCourseService.getCourses(4, 5, 5).subscribe((golfCourses: GolfCourse[]) => {
      this.golfCourses = golfCourses;
      console.log(this.golfCourses);
    });


  }

  title = 'Golf Scorecard App';
}
