import { Component, Inject, Injectable, Input } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-group-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
@Injectable()
export class ItemComponent {
  @Input() category: Category | undefined;
}
