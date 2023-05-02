import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-list-ofsurveys',
  templateUrl: './list-ofsurveys.component.html',
  styleUrls: ['./list-ofsurveys.component.css']
})
export class ListOfsurveysComponent implements OnInit {
  
  surveys: Partial<Student>[];

  constructor(private service: SurveyService) { }

  ngOnInit(): void {
    this.surveyDetails();
  }

  private surveyDetails(){
    this.service.getSurveyDetails().subscribe(res=>{
      this.surveys = res;
    });
  }

}
