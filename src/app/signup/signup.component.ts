import { Component, OnInit, Inject, DoCheck } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

import {UserSignUpInfo} from '../model/user-sign-up-info';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements DoCheck {

  email = new FormControl('', [Validators.required, Validators.email]);
  canSubmit : boolean;
  repeatPwd: string;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserSignUpInfo) {
      console.log('hello, dialog');
      console.log(data);
      data.username='';
      data.password='';
      data.email=''
      this.repeatPwd = '';
      this.canSubmit = false;
    }

    ngDoCheck(): void {
      //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
      //Add 'implements DoCheck' to the class.
     if (this.getEmailErrorMessage() === '' && this.data.password !== '' 
      && this.data.username !== '' && this.data.password === this.repeatPwd) {
        this.canSubmit = true;
     } 
    }

    getEmailErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

   

}
