import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerformanceComponent } from './performance/performance.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerformanceComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
