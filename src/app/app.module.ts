import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './logged/components/body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './not-logged/landing/landing.component';
import { NavbarComponent } from './not-logged/components/navbar/navbar.component';
import { HomeComponent } from './logged/pages/home/home.component';
import { WebappComponent } from './logged/webapp/webapp.component';
import { SidebarComponent } from './logged/components/sidebar/sidebar.component';
import { UserComponent } from './logged/pages/user/user.component';
import { CardXsComponent } from './logged/components/cards/card-xs/card-xs.component';
import { NotFoundComponent } from './logged/pages/not-found/not-found.component';
import { ModalNewProjectComponent } from './logged/components/modal/modal-new-project/modal-new-project.component';
import { NewProjectCircularComponent } from './logged/components/buttons/new-project-circular/new-project-circular.component';
import { ListComponent } from './logged/pages/list/list.component';
import { CardXlComponent } from './logged/components/cards/card-xl/card-xl.component';
import { SelectedProjectComponent } from './logged/pages/selected-project/selected-project.component';
import { ActivityManagerComponent } from './logged/components/activity-manager/activity-manager.component';
import { NewActivityBtnComponent } from './logged/components/buttons/new-activity-btn/new-activity-btn.component';
import { ModalNewActivityComponent } from './logged/components/modal/modal-new-activity/modal-new-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    LandingComponent,
    NavbarComponent,
    HomeComponent,
    WebappComponent,
    SidebarComponent,
    UserComponent,
    CardXsComponent,
    NotFoundComponent,
    ModalNewProjectComponent,
    NewProjectCircularComponent,
    ListComponent,
    CardXlComponent,
    SelectedProjectComponent,
    ActivityManagerComponent,
    NewActivityBtnComponent,
    ModalNewActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
