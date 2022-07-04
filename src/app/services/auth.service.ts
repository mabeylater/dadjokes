import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  ) { }

  async getCurrentUser() {
    const currentUser = await Auth.currentUserInfo();
    return currentUser
  }

  async getCurrentSession() {
    const currentSession = await Auth.currentSession();
    return currentSession
  }
}
