import { Injectable } from '@angular/core';
import { Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {GolfCourse} from "../model/golf-course";

@Injectable()
export class GetCoursesService {
  private courseUrl: string = 'https://golf-courses-api.herokuapp.com';

  private courseCoordinates: any = {
    latitude: 0,
    longitude: 0,
    radius: 0
  };

  constructor(private httpClient: HttpClient) {  }

  getCourses(latitude: number, longitude: number, radius: number): Observable<GolfCourse[]> {
    return this.httpClient.post<GolfCourse[]>(`${this.courseUrl}/courses`, {
      latitude: 40.396419,
      longitude: -111.9328359,
      radius: 10
    });


  }

  getCourse(id: number){
    return this.httpClient.get<GolfCourse>(`${this.courseUrl}/courses/${id}`);
  }

  getCoordinatesFromZip(){

  }

  convertRadiusToMiles(){

  }

  handleError(error){
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
