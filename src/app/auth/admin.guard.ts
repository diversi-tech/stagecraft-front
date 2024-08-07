import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "../service/login.service";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): Observable<boolean> {
    debugger
        if (this.userService.currentUser.isAdmin) {
          return of(true);
        } else {
          this.router.navigate(['/no-access']); // נתיב לדף חסימה
          return of(false);
        }
      }
 
   
  }
