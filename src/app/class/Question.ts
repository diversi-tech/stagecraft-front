import { Answer } from "./Answer";

export class Question {
    constructor(
        public IdQuestion?: number,
        public QuestionText?: string,
        public AnswerList?: Answer[]
    ) { };
}
