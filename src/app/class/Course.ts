export class course{
    constructor(public courses_id :number//קוד קורס
         ,public courses_name:string//שם קורס
         ,public NumberOfEpisodes:number//כמות פרקים
         ,public price:number//מחיר
         ,public recommendations:string //המלצות
         ,public length:number//אורך
         ,public numberOfViewers:number//כמות צופים
         ,public productionDate:Date//תאריך יצירה
         ,public lastEntry:Date//כניסה אחרונה
         ,public CourseDescription:string//תאור קורס
        ,public lastModifiedDate:Date
        ,public expanded:boolean){};//תאריך שינוי אחרון
}