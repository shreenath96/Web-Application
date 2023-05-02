//jkcjd
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListOfsurveysComponent } from './list-ofsurveys/list-ofsurveys.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    HomepageComponent,
    ListOfsurveysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
