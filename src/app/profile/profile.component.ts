import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  agreed: Boolean;

  eduList = [];
  eduItem = {};
  workExpList = [];
  pubList =[];
  icons = ['looks_one', 'looks_two', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks', 'looks', 'looks', 'looks'];
  

  constructor(private _formBuilder: FormBuilder) {
    this.eduList.push(this.eduItem);
    this.workExpList.push({});
    this.pubList.push({});
    this.agreed= false;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', null]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', null]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', null]
    });
  }

  addOneEduItem() {
    this.eduList.push({});
  }

  deleteOneEduItem(index) {
    this.eduList.splice(index,1);
  }

  
  addWorkExperience() {
    this.workExpList.push({});
  }

  deleteWorkExperience(index) {
    this.workExpList.splice(index,1);
  }

  addPub() {
    this.pubList.push({});
  }

  deletePub(index) {
    this.pubList.splice(index,1);
  }

  setAgree() {
    this.agreed = true;
  }



}
