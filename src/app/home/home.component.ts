import { Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {LoginComponent} from '../login/login.component';
import {UserCredential} from '../model/user-credential'
import {SignupComponent} from '../signup/signup.component';

import { UserSignUpInfo } from '../model/user-sign-up-info';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loggedIn: boolean;
  userCrendential: UserCredential;
  userSignupInfo: UserSignUpInfo;
  
  

  constructor(public dialog: MatDialog, private router: Router) {
    this.loggedIn = false;
  
  }

  openLoginDialog() {
    console.log('hello login');
    
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '50%',
      height: '40%',
      data:  {usernameOrEmail:'', password: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userCrendential = result;
      console.log(this.userCrendential);
      if ( this.userCrendential ) {
        if( this.userCrendential.usernameOrEmail==='example@kit'
        && this.userCrendential.password === '1234') {
          this.loggedIn = true;
        }
      }
    });
  
  }

  openSignUpDialog() {
    console.log('hello signup');
    
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '50%',
      data:  {username: '', email:'', password: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userSignupInfo = result;
      console.log(this.userSignupInfo);
      if ( this.userSignupInfo ) {
        console.log('Congratulations');
      }
    });
  
  }


  openProfile() {
    this.router.navigate(['/myprofile']);
  }

  logout() {
    this.userCrendential = {usernameOrEmail:'', password: ''};
    this.loggedIn = false;
  }
  
  
}

