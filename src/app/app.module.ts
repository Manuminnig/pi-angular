import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiNavComponent } from './common/pi-nav/pi-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { TipsComponent } from './pages/tips/tips.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { JoinComponent } from './pages/join/join.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PiNavComponent,
    HomeComponent,
    TipsComponent,
    WorkshopsComponent,
    TrainingsComponent,
    QueriesComponent,
    JoinComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
