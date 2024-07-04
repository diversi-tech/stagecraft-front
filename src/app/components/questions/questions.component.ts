import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Answer } from 'src/app/class/Answer';
import { Question } from 'src/app/class/Question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent {
  
  @Input() currentQuestion!: Question;
  @Input() AnswerList: Answer[]=[];
  number: number = 0;
  @Input() QuestionIndex: number=0;
  selectedAnswer!: Answer;
  mark:number=0;
  


  
  onAnswerChange(answer: Answer) {
    this.selectedAnswer = answer;
  }
  sendDataToParent(){
    if(this.number>=2){
      alert("נכשלתההההה חיחיחיחי")
    this.QuestionIndex += 1;
    this.childOutput.emit(this.QuestionIndex); 
    this.number=0;
    //  this.selectedAnswer=null;
    }
    else{
    if(!this.selectedAnswer)
       alert("לא נבחרה תשובה")
    if (this.selectedAnswer.IdAnswer === this.currentQuestion.correctAnswer) {
      this.QuestionIndex += 1;
      this.childOutput.emit(this.QuestionIndex); 
      this.number++;
      alert('תשובה נכונה!');
    } else {
      this.number++;
      alert('תשובה שגויה.');
    } 
   }
  }
  @Output() childOutput=new EventEmitter<number>();

}
