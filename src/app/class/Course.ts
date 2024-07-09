export class course{
    // constructor(public courses_id:number//קוד קורס
    //      ,public courses_name?:string//שם קורס
    //      ,public NumberOfEpisodes?:number//כמות פרקים
    //      ,public price?:number//מחיר
    //      ,public recommendations?:string //המלצות
    //      ,public length?:number//אורך
    //      ,public numberOfViewers?:number//כמות צופים
    //      ,public productionDate?:Date//תאריך יצירה
    //      ,public lastEntry?:Date//כניסה אחרונה
    //      ,public CourseDescription?:string//תאור קורס
    //     ,public lastModifiedDate?:Date){};//תאריך שינוי אחרון
    courses_id: number;
    courses_name?: string;
    title?: string;
    description?: string;
    price?: number;
    numberOfViewers?: number;
  
    constructor(data: any) {
      this.courses_id = data.courses_id;
      this.courses_name = data.courses_name;
      this.title = data.title;
      this.description = data.description;
      this.price = data.price;
      this.numberOfViewers = data.numberOfViewers;
    }   
}