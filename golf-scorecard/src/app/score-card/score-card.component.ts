import { Component, OnInit } from '@angular/core';
import {GetCoursesService} from "../course/get-courses.service";
import {GetScoresService} from "./get-scores.service";
import {AngularFirestore} from "angularfire2/firestore";
import {GolfCourse} from "../model/golf-course";
import {isUndefined} from "util";

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  private courseId: number;
  private course: GolfCourse;
  private isCourseSelected: boolean = false;

  constructor(private getCoursesService: GetCoursesService, private angularFirestore: AngularFirestore) { }

  ngOnInit() {
    this.courseId = this.getCoursesService.getSelectedCourse();

    if (isUndefined(this.courseId)){
      this.isCourseSelected = false;
    }
    else {
      this.isCourseSelected = true;

      this.getCoursesService.getCourse(this.courseId).subscribe((courseData: GolfCourse) => {
        this.course = courseData;
      });
    }

  }

}
