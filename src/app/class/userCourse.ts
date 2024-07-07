export class userCourse{
    constructor(
        public userCourseId:number,	
        public userId:number,
        public coursesId:number,	
        public createdAt:Date,	
        public apdatedAt:Date,
        public progress?:number,	
        public isApproved?:boolean	
    ){}
}