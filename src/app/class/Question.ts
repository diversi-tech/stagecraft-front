import { Answer } from "./Answer";

export class Question {
    constructor(
        public IdQuestion?: number,
       public QuestionTest?: string,
       public AnswerList?: Answer
    ) { };
}
