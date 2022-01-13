import { Component } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';

@Component({
  selector: 'amplify-share-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  title = 'amplify-share';
  showLoginForm = false;

  constructor() {
    Auth.currentUserInfo().then(user => {
      this.showLoginForm = !user;
    });

    const listener = (data: any) => {
      switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in');
          this.showLoginForm = false;
          break;
        case 'signOut':
          console.log('user signed out');
          this.showLoginForm = true;
          break;
      }
    }
    Hub.listen('auth', listener);
  }
}
