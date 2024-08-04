import { Component, OnInit } from '@angular/core';
import { debounce, Observable } from 'rxjs';
import { Answer } from 'src/app/class/Answer';
import { ForumAnswer } from 'src/app/class/ForumAnswer';
import { ForumQuestion } from 'src/app/class/ForumQuestion';
import { Question } from 'src/app/class/Question';
import { MyForumService } from 'src/app/service/my-forum.service';

@Component({
  selector: 'app-my-forum',
  templateUrl: './my-forum.component.html',
  styleUrls: ['./my-forum.component.css']
})
export class MyForumComponent implements OnInit {
  newQuestion: ForumQuestion = new ForumQuestion();
  newAnswer:ForumAnswer = new ForumAnswer();
  isAdd: boolean = false;
  questionList$: Observable<ForumQuestion[]> = this.forumService.testQuestion$;
  answerList$: Observable<ForumAnswer[]> = this.forumService.testAnswer$;

  constructor(public forumService:MyForumService) {}

  // ngOnInit(): void {
  //   this.loadQuestions();
  //   this.questionList$.forEach((element: ForumQuestion) => {
  //     this.loadAnswers(element.questionId)
  // });
    // this.questionList$.subscribe(data => {
    //   console.log('Questions Data:', data);
    // });
    ngOnInit(): void {
      debugger
      this.loadQuestions();
      this.questionList$.subscribe(data => {
        data.forEach(question => {
          if (question.questionId) { // Check if questionId is defined
            this.loadAnswers();
          } else {
            console.error('Question ID is undefined for question:', question);
          }
        });
      });
    }    
  
  loadQuestions(): void {
    this.forumService.GetAllQuestions();
  }
  loadAnswers(): void {
    debugger
    this.questionList$.subscribe(
      (data: ForumQuestion[]) => {
        data.forEach(item => {
          this.forumService.GetAnswersByQuestionId(item?.questionId ?? 0).subscribe(
            answer => {
              item.answers = answer
            }
          )

        })
      })
  }
  loadAnswers2(questionId: number): void {
    debugger
    this.questionList$.subscribe(
      (data: ForumQuestion[]) => {
        data.forEach(item => {
          if(item.questionId==questionId){
          this.forumService.GetAnswersByQuestionId(questionId).subscribe(
            answer => {
              item.answers = answer
            }
          )}

        })
      })
  }


  AddQuestion(): void {
    debugger
    this.newQuestion.createdAt = new Date();
    this.forumService.AddQuestion(this.newQuestion).subscribe(
      
      success => {
        this.isAdd = success;
        if (success) {
          this.loadQuestions(); // Refresh the list after adding a question
        }
      },
      error => {
        console.error('Error adding question:', error);
      }
    );
  }
  // AddAnswer():void{
  //   this.newAnswer.CreatedAt = new Date();
  //   this.forumService.AddAnswer(this.newAnswer).subscribe(
  //     success => {
  //       this.isAdd = success;
  //       if (success) {
  //         this.loadAnswers(); // Refresh the list after adding a question
  //       }
  //     },
  //     error => {
  //       console.error('Error adding question:', error);
  //     }
  //   );
  // }
  AddAnswer(questionId?: number): void {
    if (questionId === undefined) {
      console.error('Question ID is undefined');
      return;
    }
    debugger
    this.newAnswer.CreatedAt = new Date();
    this.newAnswer.QuestionId = questionId;
    this.forumService.AddAnswer(this.newAnswer, questionId).subscribe(
      success => {
        this.isAdd = success;
        if (success) {
          this.loadAnswers2(questionId); // Refresh the list after adding an answer
        }
      },
      error => {
        console.error('Error adding answer:', error);
      }
    );
  }
  
}
