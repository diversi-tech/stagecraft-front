import { Component, OnInit } from '@angular/core';
import { debounce, from, Observable, switchMap, take } from 'rxjs';
import { Answer } from 'src/app/class/Answer';
import { ForumAnswer } from 'src/app/class/ForumAnswer';
import { ForumQuestion } from 'src/app/class/ForumQuestion';
import { Question } from 'src/app/class/Question';
import { MyForumService } from 'src/app/service/my-forum.service';

@Component({
  selector: 'app-my-forum',
  templateUrl: './my-admin-forum.component.html',
  styleUrls: ['./my-admin-forum.component.css']
})
export class MyAdminForumComponent implements OnInit {
  newQuestion: ForumQuestion = new ForumQuestion();
  newAnswer: ForumAnswer = new ForumAnswer();
  isAdd: boolean = false;
  questionList$: Observable<ForumQuestion[]> = this.forumService.testQuestion$;
  answerList$: Observable<ForumAnswer[]> = this.forumService.testAnswer$;

  constructor(public forumService:MyForumService) { }


  ngOnInit(): void {
    this.loadQuestions();
    this.questionList$.subscribe(data => {
      data.forEach(question => {
        if (question.questionId !== undefined) { // Check if questionId is defined
          this.loadAnswers(question.questionId); // Ensures questionId is a number before calling loadAnswers
        } else {
          console.error('Question ID is undefined for question:', question);
        }
      });
    });
  }


  loadQuestions(): void {
    this.forumService.GetAllQuestions();
  }
  // loadAnswers(questionId: number): void {
  //   this.forumService.GetAnswersByQuestionId(questionId).subscribe(
  //     answers => {
  //       this.questionList$.subscribe(questions => {
  //         const updatedQuestions = questions.map(question => {
  //           if (question.questionId === questionId) {
  //             question.answers = answers;
  //           }
  //           return question;
  //         });
  //        // this.forumService.updateQuestionList(updatedQuestions);
  //       });
  //     },
  //     error => {
  //       console.error('Error fetching answers:', error);
  //     }
  //   );
  // }



  loadAnswers(questionId: number): void {
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


  // this.questionList$.pipe(take(1)).subscribe(questions => {
  //   const updatedQuestions = questions.map(question => {
  //     if (question.questionId === questionId) {
  //       return { ...question, answers }; // Update the question with the answers
  //     }
  //     return question;
  //   });
  //   this.forumService.updateQuestionList(updatedQuestions);
  //       // });
  //     },
  //     error => {
  //       console.error('Error fetching answers:', error);
  //     }
  //   );
  // }

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
  DeleteAnswer(answerId: number,answer:ForumAnswer): void {
    debugger
    //this.newAnswer.answerId = answerId;
    this.forumService.DeleteAnswer1(answerId,answer);
  }

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
          this.loadAnswers(questionId); // Refresh the list after adding an answer
        }
      },
      error => {
        console.error('Error adding answer:', error);
      }
    );
  }

}
