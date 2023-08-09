import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ComponentModule } from './component/component.module';
import { ProductListComponent } from './modules/category-product/product-list/product-list.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products/category/:categoryId', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
