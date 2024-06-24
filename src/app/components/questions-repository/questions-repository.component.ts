import { Component } from '@angular/core';
import { Question } from 'src/app/class/Question';

@Component({
  selector: 'app-questions-repository',
  templateUrl: './questions-repository.component.html',
  styleUrls: ['./questions-repository.component.css'],
})


export class QuestionsRepositoryComponent {
AllQuestion! :  Question[];
questionIndex : number = 0;
  // parent.component.ts

  parentName: string = '';

  // parentAge: number;

}

