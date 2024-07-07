import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/service/forum.service';

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

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  questions: Question[] = [];
  newQuestion: string = '';
  isAdmin: boolean = false;  // Set to false for regular users

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.questions$.subscribe(questions => this.questions = questions);
  }

  submitQuestion(): void {
    if (this.newQuestion) {
      this.forumService.addQuestion({ text: this.newQuestion, answers: [] });
      this.newQuestion = '';
    }
  }

  deleteQuestion(question: Question): void {
    if (this.isAdmin) {
      this.forumService.deleteQuestion(question);
    } else {
      alert('Unauthorized action');
    }
  }

  editQuestion(question: Question): void {
    if (this.isAdmin) {
      const newText = prompt('Edit question:', question.text);
      if (newText) {
        this.forumService.editQuestion(question, newText);
      }
    } else {
      alert('Unauthorized action');
    }
  }

  deleteAnswer(question: Question, answer: Answer): void {
    if (this.isAdmin) {
      this.forumService.deleteAnswer(question, answer);
    } else {
      alert('Unauthorized action');
    }
  }

  editAnswer(question: Question, answer: Answer): void {
    if (this.isAdmin) {
      const newText = prompt('Edit answer:', answer.text);
      if (newText) {
        this.forumService.editAnswer(question, answer, newText);
      }
    } else {
      alert('Unauthorized action');
    }
  }

  submitAnswer(question: Question): void {
    if (question.newAnswer) {
      this.forumService.addAnswer(question, { text: question.newAnswer, stars: 0 });
      question.newAnswer = '';
    }
  }
  onFileSelected(event: any, question: Question): void {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      this.forumService.uploadFile(file).then(fileMetadata => {
        const answer = question.answers[question.answers.length - 1];  // Get the last answer
        if (answer) {
          answer.files = answer.files || [];
          answer.files.push(fileMetadata);
        }
      });
    }
  }
}



