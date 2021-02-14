import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ShowUserComponent } from './users/show-user/show-user.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import {NewGarageComponent } from './new-garage/new-garage.component';
import {GarageFormComponent } from './forms/user-form/garage-form.component';
import { GarageModifyComponent } from './garage-modify/garage-modify.component';
import { GarageViewComponent } from './garage-view/garage-view.component';
import { GarageListComponent } from './garage-list/garage-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ShowUserComponent,
    NewUserComponent,
    UserFormComponent,
    EditUserComponent,
    NewGarageComponent,
    GarageFormComponent,
    GarageModifyComponent,
    GarageViewComponent,
    GarageListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
