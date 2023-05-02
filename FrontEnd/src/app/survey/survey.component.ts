import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from '../models/student';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  submitted: boolean;

  surveyForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    street_add: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    ph: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    interest: new FormControl(''),
    comments: new FormControl(),
    recommend: new FormControl()
  });

  checkboxes = ['Students', 'Location', 'Campus', 'Atmosphere', 'Dorm Rooms', 'Sports'];
  radioButtons = ['Friends', 'Television', 'Internet', 'Other'];

  checkboxesSelected=[];

  constructor(private service: SurveyService) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.surveyForm.valid){
      this.submitted = true;
      this.saveSurveyForm(this.surveyForm.value);
    }
  }

  saveSurveyForm(student:Partial<Student>){
    this.service.saveSurvey(student).subscribe();
  }

}
