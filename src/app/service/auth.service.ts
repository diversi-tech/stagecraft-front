import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string;

  constructor() {
    // Simulate user role
    this.userRole = 'admin';  // This would typically come from an authentication provider
  }

  isUserAdmin(): boolean {
    return this.userRole === 'admin';
  }
}
