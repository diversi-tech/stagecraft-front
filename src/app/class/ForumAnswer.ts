import { ForumFile } from "./ForumFile";

export class ForumAnswer {
    constructor(public answerId?: number//קוד קורס
        , public QuestionId?: number
        , public text?: string//שם קורס
        , public CreatedAt?: Date//כמות פרקים
        ,public Files ?:Array<ForumFile>

    ) { }

}