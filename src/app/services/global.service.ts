import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  private _currentUserId!: string;
  private _currentUserEmail!: string;
  private _isAuthenticated = false;

  set currentUser(currentUser: any) {
    this._currentUserId = currentUser.id
    this._currentUserEmail = currentUser.attributes.email
    this._isAuthenticated = true;
  }

  get currentUserId() {
    return this._currentUserId;
  }

  get currentUserEmail() {
    return this._currentUserEmail;
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    // this.checkIsAuthenticated();
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.checkIsAuthenticated();
    // });
  }

  checkIsAuthenticated() {
    this.auth.getCurrentUser()
      .then(user => this._currentUserId = user)
      .catch(err => console.log(err));
  }

  async getIsAuthenticatedAsync(){
    if(this.isAuthenticated) return this.currentUser;
    const currentUser = await this.auth.getCurrentUser();
    if(currentUser) {
      this._isAuthenticated = true;
      this.currentUser = currentUser;
      return currentUser;
    }
  }
}


@NgModule({
  providers: [
    /* DON'T ADD THE SERVICE HERE */
  ]
})
export class GlobalModule {
  static forRoot(): ModuleWithProviders<GlobalModule> {
    return {
      ngModule: GlobalModule,
      providers: [GlobalService]
    };
  }
}
