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


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    WelcomeComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'search', component: CourseListComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [GetCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
