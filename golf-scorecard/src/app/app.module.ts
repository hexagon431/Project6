import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import {HttpClientModule} from "@angular/common/http";
import { WelcomeComponent } from './welcome/welcome.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GetCoursesService} from "./course/get-courses.service";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material-module/material.module";
import { ScoreCardComponent } from './score-card/score-card.component';
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    WelcomeComponent,
    CourseDetailsComponent,
    ScoreCardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'search', component: CourseListComponent},
      {path: 'details/:id', component: CourseDetailsComponent},
      {path: 'scorecard', component: ScoreCardComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [GetCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
