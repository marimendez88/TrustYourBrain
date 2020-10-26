
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from './../../models/types.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { 
  
  }
  private urlBase = 'https://opentdb.com/api.php'

  loadQuestionsPool () {
    return this.http.get('${urlBase}/')
  }

}
