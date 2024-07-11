import { Time } from "@angular/common";

export class courses{
    constructor(
         public courses_id ?:number//קוד קורס
        , public courses_name?:string//שם קורס
         ,public title?:string//כותרת
         ,public description?:string//תיאור
         ,public create_at?:Date //התאריך יצירה
         ,public update_at?:Date//תאריך עדכון
         ,public price?:number//כמחיר
         ,public several_chapters?:number//מספר_פרקים
         ,public length?:string//כאורך
         ,public numberOfViewers?:number// כמות צופים//
        
    ){}
}