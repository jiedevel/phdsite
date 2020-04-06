import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProfileComponent } from '../profile/profile.component';
import { HomeComponent } from '../home/home.component';

const Routes: Routes = [
  { path: 'myprofile', component: ProfileComponent},
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
  

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      Routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
