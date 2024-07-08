import { Component } from '@angular/core';
import { Answer } from 'src/app/class/Answer';
import { Question } from 'src/app/class/Question';

@Component({
  selector: 'app-questions-repository',
  templateUrl: './questions-repository.component.html',
  styleUrls: ['./questions-repository.component.css'],
})


export class QuestionsRepositoryComponent {
  // parentName: string = "dtygi";
  // AllQuestion: string[] = ['gu', 'fuyv', 'tgfy'];
  // correctAnswer!: number;

  QuestionList: Question[] =[
    new Question(1, "How r u?",2, [new Answer(12, "ds"), new Answer(33, "dfsfdf"),new Answer(24, "wq5eutryi")]),
    new Question(3, "hfghjgjlkjhgfdchgvjh r u?",4, [new Answer(12, "ds"), new Answer(33, "dfsfdf"),new Answer(24, "wq5eutryi")])
  ];

  
  QuestionIndex: number = 0;

  onChildOutput(newFatherValue:number){
  this.QuestionIndex=newFatherValue;
  }

}

