import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserTileComponent } from './dashboard/user-tile/user-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyfooterComponent,
    LoginComponent,
    DashboardComponent,
    UserTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
