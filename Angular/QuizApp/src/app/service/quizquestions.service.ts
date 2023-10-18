import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuizquestionsService {

  constructor(private http:HttpClient) { }

  getQuestionsJson(){
    return this.http.get<any>("/assets/questions.json");
  }
}
