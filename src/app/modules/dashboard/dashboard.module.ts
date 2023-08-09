import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentModule } from 'src/app/component/component.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemComponent } from './sidebar/item/item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SlideBannerComponent } from './slide-banner/slide-banner.component';
import { StarSvgComponent } from './product-item/star-svg/star-svg.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ItemComponent,
    ProductItemComponent,
    SlideBannerComponent,
    StarSvgComponent
  ],
  imports: [
    CommonModule, ComponentModule, AppRoutingModule
  ],
  exports: [ProductItemComponent],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'vi-VN'
  }]
})
export class DashboardModule { }
