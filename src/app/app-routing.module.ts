import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './logged/pages/home/home.component';
import { ListComponent } from './logged/pages/list/list.component';
import { NotFoundComponent } from './logged/pages/not-found/not-found.component';
import { SelectedProjectComponent } from './logged/pages/selected-project/selected-project.component';
import { UserComponent } from './logged/pages/user/user.component';

const routes: Routes = [
  { path: '404', component:NotFoundComponent }, 
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },
  { path: 'profile', component:UserComponent },
  { path: 'projects', component:ListComponent },
  { path: ':key', component:SelectedProjectComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
