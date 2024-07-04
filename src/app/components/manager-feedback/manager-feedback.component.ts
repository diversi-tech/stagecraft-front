import { Component } from '@angular/core';
import { Manager_feedback } from 'src/app/class/Manager_feedback';

@Component({
  selector: 'app-manager-feedback',
  templateUrl: './manager-feedback.component.html',
  styleUrls: ['./manager-feedback.component.css']
})
export class ManagerFeedbackComponent {
  users: Manager_feedback[] = [
    { IdUser: 1, file: ' ', feedback: '' },
    { IdUser: 2, file: ' ', feedback: '' },
    { IdUser: 3, file: ' ', feedback: '' }
  ];

  saveFeedback(userId: number): void {
    const user = this.users.find(u => u.IdUser === userId);
    if (user) {
      user.file = user.feedback;
      console.log(`Feedback for user ${userId}: ${user.file}`);
      // כאן ניתן להוסיף לוגיקה לשמירת המשוב לשרת, לדוגמה קריאה ל-API
    }
  }

}



// interface User {
//   id: number;
//   taskFileUrl: string;
//   managerFeedback: string;
// }


