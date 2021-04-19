import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FriendsComponent} from './friends/friends.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'friends', component: FriendsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
