export class userCourse{
    constructor(
        
        public userId:number,
        public coursesId:number,
        public userCourseId?:number,		
        public createdAt?:Date,	
        public apdatedAt?:Date,
        public progress?:number,	
        public isApproved?:boolean	
    ){}
}