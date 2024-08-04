import { ForumAnswer } from "./ForumAnswer";

export class ForumQuestion{
    constructor(public questionId ?:number//קוד קורס
         ,public text?:string//שם קורס
         ,public createdAt?:Date//כמות פרקים
         ,public answers ?:Array<ForumAnswer>
    ){}

}