import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerformanceComponent } from './performance/performance.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
