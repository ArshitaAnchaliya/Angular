import { Component } from '@angular/core';
import { QuizquestionsService } from '../service/quizquestions.service';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  public points:number=0;
  public questionsList: any=[];
  public currentquestion:number = 0;
  public variableStore: any=[];
correctAnswer:number=0
incorrectAnswer:number=0

isQuizEnded:boolean=false;

  constructor(private questionsservice:QuizquestionsService, private dataShared:DataSharingService){

  }

  ngOnInit():void{
    this.getallquestions();
  }


  //to get all the questions from json file and store into questionsList array
   getallquestions(){
    this.questionsservice.getQuestionsJson()
    .subscribe(res=>{
this.questionsList=res.questions;
    })
   }

  
   //checking the options selected with correct ans and if correct the give 5points
   answer(currentques:number,option:any){
    if (currentques===this.questionsList.length) {
      this.isQuizEnded=true;
    }

     if(option.correct){
      this.points+=5;
      this.correctAnswer++;
      setTimeout(()=>{
        this.currentquestion++;
      },1000);
     }
     else{
  
      setTimeout(()=>{
        this.incorrectAnswer++;
        this.currentquestion++;
      },1000);
     }
   }

   setData() {
    this.dataShared.quesAttempt = this.questionsList.length;
    this.dataShared.totalPoints = this.points;
    this.dataShared.correctAns = this.correctAnswer;
    this.dataShared.wrongAns = this.incorrectAnswer;
  
  }

   //reset the quiz
   resetquiz(){
    this.points=0;
    this.getallquestions();
    this.currentquestion=0;
   }
  
}
