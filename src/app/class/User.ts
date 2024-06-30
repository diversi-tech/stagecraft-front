
export class users {
    constructor(
        public Email: string,// אימייל
       public password_has: string,// ססמא
        public UserId?: number,//     קוד משתמש
        public Username?: string,// שם משתמש
        public coursesAmount?: number,// כמות קורסים
        public is_approved?: boolean,// מאושר
        public lastView?: string,// צפיה אחרונה
        public status?: boolean,// סטטוס
        public create_at?: Date,// תאריך יצירה
        // שינוי תאריך אחרון
        public last_login?: Date// כניסה אחרונה
    ) { };
}