import { Component, Inject, DoCheck} from '@angular/core';
import {UserCredential} from '../model/user-credential';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
  email = new FormControl('', [Validators.required, Validators.email]);
  canSubmit : boolean;


  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserCredential) {
      console.log('hello, dialog');
      console.log(data);
      data.usernameOrEmail='';
      data.password='';
      this.canSubmit = false;
    }

    ngDoCheck(): void {
      //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
      //Add 'implements DoCheck' to the class.
     if (this.getEmailErrorMessage() === '' && this.data.password !== '' ) {
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
