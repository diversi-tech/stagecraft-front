import { Component, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  accessibilityMode: boolean = false;
constructor( private renderer: Renderer2,public userService: UserService){}

toggleAccessibility() {
  this.accessibilityMode = !this.accessibilityMode;
  console.log('Accessibility mode:', this.accessibilityMode); // בדיקת מצב
  if (this.accessibilityMode) {
    this.renderer.addClass(document.body, 'accessibility-mode');
  } else {
    this.renderer.removeClass(document.body, 'accessibility-mode');
  }
  console.log('Class applied:', document.body.classList); // בדיקת מחלקות על body
}

}
