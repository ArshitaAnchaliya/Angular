import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],

})
export class ResultComponent {


  constructor(private dataShared: DataSharingService) {

  }

  Attemped = this.dataShared.quesAttempt;
  Score = this.dataShared.totalPoints;
  CorrectAns = this.dataShared.correctAns;
  WrongAns = this.dataShared.wrongAns;

}
