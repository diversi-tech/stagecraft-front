// import { CanActivate, CanActivateFn } from '@angular/router';
// import { UserService } from '../service/login.service';
// import { Router } from 'express';
// import { catchError, map, Observable, of } from 'rxjs';
// import jwt_decode from 'jwt-decode';

// export class AdminGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(): Observable<boolean> {
//     const token = sessionStorage.getItem('authToken');

//     if (token) {
//       try {
//         const decodedToken: any = jwt_decode(token); // פענוח הטוקן
//         const userRole = decodedToken.role; // חילוץ הרול מהטוקן

//         if (userRole === 'admin') {
//           return of(true);
//         } else {
//           this.router.navigate(['/no-access']);
//           return of(false);
//         }
//       } catch (e) {
//         this.router.navigate(['/no-access']);
//         return of(false);
//       }
//     } else {
//       this.router.navigate(['/no-access']);
//       return of(false);
//     }
//   }
// }