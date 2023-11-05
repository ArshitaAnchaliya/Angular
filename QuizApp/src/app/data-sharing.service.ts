import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  quesAttempt:Number=0;
 totalPoints:Number=0;
 correctAns:Number=0;
 wrongAns:Number=0;
  constructor() { }
}
