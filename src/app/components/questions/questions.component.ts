import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Question } from 'src/app/class/Question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']

  // template: `
  //   <div>
  //     <p>Name received in child component: {{ name }}</p>
  //     <p>Age received in child component: {{ age }}</p>
  //   </div>
  // `,
})

export class QuestionsComponent {

  // child.component.ts

  // @Input() name: string='';
  // @Input() items: string[]=[];
  
  @Input() currentQuestion!: Question;
  selectedIndex: number = -1;
  selectedAnswer!:string;
  @Input() QuestionIndex!: number;

  // setSelectedAnswer(answer: string) {
  //   this.selectedAnswer = answer;
  // }

  sendDataToParent(){
    
    this.QuestionIndex += 1;
    this.childOutput.emit(this.QuestionIndex); 

  }
  @Output() childOutput=new EventEmitter<number>();

}
