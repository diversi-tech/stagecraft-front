import { Component, Input } from '@angular/core';

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

  @Input() name!: string;
  @Input() questionIndex!: number[];

}
