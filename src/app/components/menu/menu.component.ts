import { Component, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
constructor( public userService: UserService){}

}
