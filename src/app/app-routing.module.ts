import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ComponentModule } from './component/component.module';
import { AccountComponent } from './modules/account/account.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'account', component: AccountComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
