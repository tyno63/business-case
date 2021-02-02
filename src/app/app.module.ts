import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserModifyComponent } from './user-modify/user-modify.component';
import { GarageListComponent } from './garage-list/garage-list.component';
import { GarageViewComponent } from './garage-view/garage-view.component';
import { GarageModifyComponent } from './garage-modify/garage-modify.component';
import { AnnonceDetailsComponent } from './annonce-details/annonce-details.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { ModifAnnonceComponent } from './modif-annonce/modif-annonce.component';
import { StatsComponent } from './stats/stats.component';
import { LastAnnonceComponent } from './last-annonce/last-annonce.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DashboardElementComponent } from './dashboard-element/dashboard-element.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserViewComponent,
    UserModifyComponent,
    GarageListComponent,
    GarageViewComponent,
    GarageModifyComponent,
    AnnonceDetailsComponent,
    AnnonceListComponent,
    ModifAnnonceComponent,
    StatsComponent,
    LastAnnonceComponent,
    NewUserComponent,
    DashboardElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
