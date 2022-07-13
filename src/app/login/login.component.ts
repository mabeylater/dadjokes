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

  async getCurrentUser() {
    this.currentUser = await this.auth.getCurrentUser();
    if(this.currentUser) {
      this.auth.IsAuthenticated = true;
      this.isAuthenticated = this.auth.isAuthenticated;
      this.attributesForm.patchValue(this.currentUser.attributes);
    }
  }

  async update() {
    await Auth.updateUserAttributes(await Auth.currentAuthenticatedUser(), this.attributesForm.value);
  }
}
