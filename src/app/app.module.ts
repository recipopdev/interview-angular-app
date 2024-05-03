import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersFormComponent } from './components/users-page/users-form/users-form.component';
import { UsersTableComponent } from './components/users-page/users-table/users-table.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersFormComponent,
    UsersTableComponent,
    UsersPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
