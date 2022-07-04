import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() showUserDetails = true;

  currentUser: any;
  identities: any;

  constructor(
    private auth: AuthService,
    private global: GlobalService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  async getCurrentUser() {
    this.currentUser = await this.auth.getCurrentUser();
    this.identities = JSON.parse(this.currentUser.attributes.identities)
  }


}
