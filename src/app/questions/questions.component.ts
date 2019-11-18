import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private service: QuestionsService, private router : Router) { }

  ngOnInit() {

    // this.service.getAnswers();
    // this.service.GetQuestions();
    console.log( this.service.getMortgagedHouses());


    // this.service.GetMortgagedHouses();
  }

}
