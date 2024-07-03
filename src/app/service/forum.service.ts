import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Answer {
  text: string;
  stars: number;
  files?: FileMetadata[];
}

interface Question {
  text: string;
  answers: Answer[];
  newAnswer?: string;
}

interface FileMetadata {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private questionsSubject = new BehaviorSubject<Question[]>([
    // Example data
    { text: 'What is Angular?', answers: [{ text: 'A front-end framework', stars: 5 }] },
  ]);

  questions$ = this.questionsSubject.asObservable();

  constructor() {}

  getQuestions(): Question[] {
    return this.questionsSubject.value;
  }

  setQuestions(questions: Question[]): void {
    this.questionsSubject.next(questions);
  }

  addQuestion(question: Question): void {
    const questions = this.getQuestions();
    questions.push(question);
    this.setQuestions(questions);
  }

  deleteQuestion(question: Question): void {
    const questions = this.getQuestions().filter(q => q !== question);
    this.setQuestions(questions);
  }

  editQuestion(oldQuestion: Question, newText: string): void {
    const questions = this.getQuestions();
    const question = questions.find(q => q === oldQuestion);
    if (question) {
      question.text = newText;
      this.setQuestions(questions);
    }
  }

  addAnswer(question: Question, answer: Answer): void {
    const questions = this.getQuestions();
    const q = questions.find(q => q === question);
    if (q) {
      q.answers.push(answer);
      this.setQuestions(questions);
    }
  }

  deleteAnswer(question: Question, answer: Answer): void {
    const questions = this.getQuestions();
    const q = questions.find(q => q === question);
    if (q) {
      q.answers = q.answers.filter(a => a !== answer);
      this.setQuestions(questions);
    }
  }

  editAnswer(question: Question, oldAnswer: Answer, newText: string): void {
    const questions = this.getQuestions();
    const q = questions.find(q => q === question);
    if (q) {
      const answer = q.answers.find(a => a === oldAnswer);
      if (answer) {
        answer.text = newText;
        this.setQuestions(questions);
      }
    }
  }
  rateAnswer(answer: Answer, stars: number): void {
    answer.stars = stars;
    this.setQuestions(this.getQuestions());
  }

  uploadFile(file: File): Promise<FileMetadata> {
    // Simulating file upload by generating a URL (in a real app, you'd upload to a server)
    return new Promise(resolve => {
      const fileMetadata: FileMetadata = {
        name: file.name,
        url: URL.createObjectURL(file)
      };
      resolve(fileMetadata);
    });
  }
}


