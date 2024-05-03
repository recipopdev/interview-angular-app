import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersPageComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
