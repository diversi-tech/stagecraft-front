
export class users {
    constructor(
        public email: string,// אימייל
       public password: string,// ססמא
        public code?: number,//     קוד משתמש
        public name: string = '',// שם משתמש
        public coursesNum?: number,// כמות קורסים
        public isConfirmed?: boolean,// מאושר
        public lastView?: string,// צפיה אחרונה
        public status?: boolean,// סטטוס
        public registrationDate?: Date,// תאריך יצירה
        // שינוי תאריך אחרון
        public LastModifiedDate?: Date// כניסה אחרונה
    ) { };
}