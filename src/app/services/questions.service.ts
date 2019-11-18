import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class QuestionsService {

  list :any[];
  
  lst: any[];

  readonly baseURI = 'http://localhost:52540/api';

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  GetQuestions(){

      return this.http.get(this.baseURI+'/MyQuestions')
      .toPromise()
      .then(rel => this.list = rel as any[]);
  }

  getAnswers(){

    // var tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    return this.http.get(this.baseURI+'/StudentAnswers'); // ,{headers : tokenHeader}
  }

  getMortgagedHouses(){
    return this.http.get(this.baseURI+'/MyQuestions')
    .toPromise()
    .then(res => this.list = res as any[]);
  }


  
  GetMortgagedHouses(){
    return this.http.get(this.baseURI+'/PropertyMortgages')
    .toPromise()
    .then(res => this.list = res as any[]);
  }


}
