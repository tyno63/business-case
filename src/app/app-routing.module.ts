import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './users/list-users/list-users.component';
import {NewUserComponent} from './users/new-user/new-user.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import { ShowUserComponent } from './users/show-user/show-user.component';
import { AnnonceDetailsComponent } from './annonce-details/annonce-details.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { DashboardElementComponent } from './dashboard-element/dashboard-element.component';
import { LastAnnonceComponent } from './last-annonce/last-annonce.component';
import { ModifAnnonceComponent } from './modif-annonce/modif-annonce.component';
import { GarageListComponent } from './garage-list/garage-list.component';
import { GarageModifyComponent } from './garage-modify/garage-modify.component';
import { GarageViewComponent } from './garage-view/garage-view.component';
import { StatsComponent } from './stats/stats.component';
import {NewGarageComponent } from './new-garage/new-garage.component';


const routes: Routes = [
  {path: '', component:DashboardElementComponent},
  {path: 'users/list', component: ListUsersComponent},
  {path: 'users/new', component: NewUserComponent},
  {path: 'users/edit/:id', component: EditUserComponent},
  {path: 'users/show', component:ShowUserComponent},
  {path: 'annonce-details', component:AnnonceDetailsComponent},
  {path: 'annonce-list', component:AnnonceListComponent},
  {path: 'last-annonce', component:LastAnnonceComponent},
  {path: 'modif-annonce', component:ModifAnnonceComponent},
  {path: 'garage-list', component:GarageListComponent},
  {path: 'garage-modif/:id', component:GarageModifyComponent},
  {path: 'vue-garage', component:GarageViewComponent},
  {path: 'stats', component:StatsComponent},
  {path: 'garage/new', component:NewGarageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
