export class course{
    constructor(public courses_id :number//קוד קורס
         ,public courses_name:string//שם קורס
         ,public title:string//כמות פרקים
         ,public description:string//מחיר
         ,public price:number //המלצות
         ,public Several_chapters:number//אורך
         ,public length:number//כמות צופים
         ,public numberOfViewers:number//תאריך יצירה
         ,public create_at:Date//כניסה אחרונה
         ,public update_at:Date//תאור קורס
       // ,public lastModifiedDate:Date
        ,public expanded:boolean){};//תאריך שינוי אחרון
}