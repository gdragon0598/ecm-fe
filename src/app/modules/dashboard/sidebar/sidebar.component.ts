import { Component, Inject, Input } from '@angular/core';

import { ItemComponent } from './item/item.component';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() title: String = "";
  @Input() categoryList: Array<Category> = [];
}
