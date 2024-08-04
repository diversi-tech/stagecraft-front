import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForumQuestion } from '../class/ForumQuestion';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ForumAnswer } from '../class/ForumAnswer';
import { Question } from '../class/Question';

@Injectable({
  providedIn: 'root'
})
export class MyForumService {
  private baseUrl: string = `${environment.baseUrl}/Forum`;

  private questionList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private answerList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public testQuestion$ = this.questionList.asObservable();
  public testAnswer$ = this.answerList.asObservable();


  constructor(private http: HttpClient) { }

  AddQuestion(question: ForumQuestion): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/AddQuestion`, question).pipe(
      tap(() => this.GetAllQuestions())  // Refresh the question list on successful addition
    );
  }

  GetAllQuestions(): void {
    this.http.get<ForumQuestion[]>(`${this.baseUrl}/GetAllQuestions`).subscribe(
      questions => {
        this.questionList.next([...questions]);
      },
      error => {
        console.error('Error fetching questions:', error);
      }
    );
  }
  AddAnswer(answer: ForumAnswer, questionId: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/AddAnswer/${questionId}`, answer).pipe(
      tap(() => this.GetAnswersByQuestionId(questionId)) // Refresh the answer list on successful addition
    );
  }

  GetAnswersByQuestionId(questionId: number): Observable<ForumAnswer[]> {
    return this.http.get<ForumAnswer[]>(`${this.baseUrl}/GetAnswersByQuestionId/${questionId}`);
  }

  updateQuestionList(questions: ForumQuestion[]): void {
    this.questionList.next([...questions]);
  }
  // AddAnswer(answer: ForumAnswer ): Observable<boolean> {
  //   return this.http.post<boolean>(`${this.baseUrl}/AddAnswer`, answer).pipe(
  //     tap(() => this.GetAllAnswers())  // Refresh the answer list on successful addition
  //   );
  // }
  GetAllAnswers():void{
    this.http.get<ForumAnswer[]>(`${this.baseUrl}/GetAllAnswers`).subscribe(
      answers => {
        this.answerList.next(answers);
      },
      error => {
        console.error('Error fetching answers:', error);
      }
    ); 
  }
  DeleteAnswer1(answerId1: number,answer:ForumAnswer): Observable<ForumAnswer[]> {
    debugger
    return this.http.post<ForumAnswer[]>(`${this.baseUrl}/DeleteAnswer1/${answerId1}`,answer);
  }
  // EditAnswer(answer:ForumAnswer,answerId:ForumAnswer):Observable<ForumAnswer>{
  //   return this.http.put<ForumAnswer>(`${this.baseUrl}/UpdateAnswer/${answerId}`);
  // }
  addItem(newItem: ForumAnswer) {
    const currentArray = this.answerList.value;
    this.answerList.next([...currentArray, newItem]);
  }

  
}
