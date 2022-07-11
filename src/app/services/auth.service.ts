import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _isAuthenticated?: boolean;

  constructor(
  ) { }

  set IsAuthenticated(isAuthenticated: boolean) {
    this._isAuthenticated = isAuthenticated;
  }
  get isAuthenticated() {
    return this._isAuthenticated;
  }

  async getCurrentUser() {
    const currentUser = await Auth.currentUserInfo();
    return currentUser
  }

  async getCurrentSession() {
    const currentSession = await Auth.currentSession();
    return currentSession
  }
}
