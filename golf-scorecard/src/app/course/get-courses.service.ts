import { Injectable } from '@angular/core';
import { Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {GolfCourse} from "../model/golf-course";

@Injectable()
export class GetCoursesService {
  private courseUrl: string = 'https://golf-courses-api.herokuapp.com';
  private selectedCourse: number;

  constructor(private httpClient: HttpClient) {  }

  getCourses(latitude: number, longitude: number, radius: number): Observable<GolfCourse[]> {
    return this.httpClient.post<GolfCourse[]>(`${this.courseUrl}/courses`, {
      latitude: latitude,
      longitude: longitude,
      radius: radius
    });


  }

  getCourse(id: number): Observable<GolfCourse>{
    return this.httpClient.get<GolfCourse>(`${this.courseUrl}/courses/${id}`);
  }

  convertZip(zip: number): Observable<Object> {
    return this.httpClient.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=AIzaSyD_NPHIrLEEXMzX6539FOKx_1WSBkd8zVI`);
  }

  selectCourse(id: number){
    this.selectedCourse = id;
  }

  getSelectedCourse(): number {
    return this.selectedCourse;
  }

  handleError(error){
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
