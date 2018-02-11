import { Component, OnInit } from '@angular/core';
import {GolfCourse} from "../../model/golf-course";
import {GetCoursesService} from "../get-courses.service";
import {Coordinates} from "../../model/coordinates";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  private courses: GolfCourse[] = [];
  private zip: number;
  private radius: number;
  private coordinates: Coordinates = {
    latitude: 0,
    longitude: 0,
    radius: 0
  };

  constructor(private golfCourseService: GetCoursesService) {  }

  ngOnInit() {
  }

  findCourses(){
    this.golfCourseService.convertZip(this.zip).subscribe((mapData:any) => {
      console.log(mapData);
      // let lat = mapData.results[0].geometry.location.lat;
      // let lng = mapData.results[0].geometry.location.lng;
      this.coordinates={
        latitude: mapData.results[0].geometry.location.lat,
        longitude: mapData.results[0].geometry.location.lng,
        radius: this.radius
      };

      this.golfCourseService.getCourses(this.coordinates.latitude, this.coordinates.longitude, this.coordinates.radius).subscribe((golfCourses: GolfCourse[]) => {
        this.courses = golfCourses;
        console.log(this.courses);
      })
    });




  }

}
