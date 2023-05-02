/**
 * Author Deepika Tinnavalli
 * G01343932
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListOfsurveysComponent } from './list-ofsurveys/list-ofsurveys.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'surveyForm', component: SurveyComponent },
  { path: 'surveyList', component: ListOfsurveysComponent },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
