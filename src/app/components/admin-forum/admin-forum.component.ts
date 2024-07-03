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
  selector: 'app-admin-forum',
  templateUrl: './admin-forum.component.html',
  styleUrls: ['./admin-forum.component.css']
})
export class AdminForumComponent implements OnInit {
  questions: Question[] = [];

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.questions$.subscribe(questions => this.questions = questions);
  }

  deleteQuestion(question: Question): void {
    this.forumService.deleteQuestion(question);
  }

  editQuestion(question: Question): void {
    const newText = prompt('Edit question:', question.text);
    if (newText) {
      this.forumService.editQuestion(question, newText);
    }
  }

  deleteAnswer(question: Question, answer: Answer): void {
    this.forumService.deleteAnswer(question, answer);
  }

  editAnswer(question: Question, answer: Answer): void {
    const newText = prompt('Edit answer:', answer.text);
    if (newText) {
      this.forumService.editAnswer(question, answer, newText);
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





