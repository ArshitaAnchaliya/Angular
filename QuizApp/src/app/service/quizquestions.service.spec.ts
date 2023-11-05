import { TestBed } from '@angular/core/testing';

import { QuizquestionsService } from './quizquestions.service';

describe('QuizquestionsService', () => {
  let service: QuizquestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizquestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
