import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnonceDetailsComponent } from './annonce-details/annonce-details.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { DashboardElementComponent } from './dashboard-element/dashboard-element.component';
import { GarageListComponent } from './garage-list/garage-list.component';
import { GarageModifyComponent } from './garage-modify/garage-modify.component';
import { GarageViewComponent } from './garage-view/garage-view.component';
import { LastAnnonceComponent } from './last-annonce/last-annonce.component';
import { ModifAnnonceComponent } from './modif-annonce/modif-annonce.component';
import { NewUserComponent } from './new-user/new-user.component';
import { StatsComponent } from './stats/stats.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModifyComponent } from './user-modify/user-modify.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {path:'',component:DashboardElementComponent},
  {path:'annonce',component:AnnonceListComponent},
  {path:'annonceDetail',component:AnnonceDetailsComponent},
  {path:'garageList',component:GarageListComponent},
  {path:'modifGarage',component:GarageModifyComponent},
  {path:'vueGarage',component:GarageViewComponent},
  {path:'LastAnnonce',component:LastAnnonceComponent},
  {path:'annonceModif',component:ModifAnnonceComponent},
  {path:'userNew',component:NewUserComponent},
  {path:'stat',component:StatsComponent},
  {path:'listeUser',component:UserListComponent},
  {path:'modifUser',component:UserModifyComponent},
  {path:'vueUser',component:UserViewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
