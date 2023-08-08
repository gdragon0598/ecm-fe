import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
@Component({
  selector: '[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;
  hasDiscount: boolean = false;
  constructor() {

  }
  ngOnInit(): void {
    const rating = this.product?.rating || 0;
    const starRatingWidth = (rating / 5) * 100;
    //set the width of the style-rated-star to the calculated width above
    const docStyle = document.documentElement.style;
    docStyle.setProperty('--rating-percent', starRatingWidth + '%')
    if (this.product?.sale?.toString() !== '0') {
      this.hasDiscount = true;
    }
  }
}
