import { Component, Input, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { AuthService } from '../services/auth.service';
import { GlobalService } from '../services/global.service';
import { Auth } from 'aws-amplify';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() showUserDetails = true;

  currentUser: any;

  // auth form fields
  email!: string;
  password!: string;
  givenName!: string;
  familyName!: string;
  name!: string;

  attributesForm = this.fb.group({
    ['name']: [''],
    ['given_name']: [''],
    ['family_name']: [''],
  });
  isAuthenticated?: boolean;

  constructor(
    private auth: AuthService,
    public authenticator: AuthenticatorService,
    private fb: FormBuilder
    ) {

    }

  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated;
    this.getCurrentUser();
  }

  async getCurrentUser(currentUser: any = undefined) {
    this.currentUser = currentUser ?? await this.auth.getCurrentUser();
    if(this.currentUser) {
      this.auth.IsAuthenticated = true;
      this.isAuthenticated = this.auth.isAuthenticated;
      this.attributesForm.patchValue(this.currentUser.attributes);
    }
  }

  async signIn() {
    this.currentUser = await Auth.signIn(this.email, this.password);
    this.getCurrentUser(this.currentUser);
    this.password = '';
  }

  signup() {
    this.name = `${this.givenName} ${this.familyName}`;
    Auth.signUp({
      username: this.email,
      password: this.password,
      attributes: {
        name: this.name,
        family_name: this.familyName,
        given_name: this.givenName
      }
    });
  }

  async signOut() {
    await Auth.signOut();
    this.currentUser = null;
  }

  async update() {
    Auth.updateUserAttributes(this.currentUser, this.currentUser.attributes);
  }
}
