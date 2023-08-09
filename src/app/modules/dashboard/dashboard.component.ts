import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemComponent } from './sidebar/item/item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  newProducts: Array<Product> | undefined;
  products: Array<Product> | undefined;
  categories: Array<Category> | undefined;
  productsSubscription: Subscription | undefined;
  categoriesSubscription: Subscription | undefined;

  private currentPage = 0;
  private size = 5;

  // productList: Product[] = [
  //   {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.1,
  //     rating: 3
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   },
  //   {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   },
  //   {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   }, {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   }, {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   }, {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   }, {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   }, {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   }, {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   }, {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   }, {
  //     id: 123,
  //     name: "NỒI CHIÊN KHÔNG DẦU HAKAWA HK-AF8L - HÀNH CHÍNH HÃNG HAKAWA",
  //     price: 1290000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/1e/73/4e/2def63850340df8f001ca30f872c43f7.jpg.webp",
  //     soldQuantity: 1000,
  //     sale: 0.10,
  //     rating: 3.4
  //   },
  //   {
  //     id: 123,
  //     name: "Kem làm lành da nội sinh, ngăn ngừa nhiễm khuẩn AVÈNE CICALFATE+ 40ml",
  //     price: 424000,
  //     imageUrl: "https://salt.tikicdn.com/cache/280x280/ts/product/11/0e/42/bc2e178b78100419813bb64fc4f51021.png.webp",
  //     soldQuantity: 45,
  //     sale: 0.15,
  //     rating: 5
  //   },

  // ];

  constructor(private productService: ProductService, private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
    this.getNewProducts();
  }
  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

  getProducts(): void {
    this.productsSubscription = this.productService
      .getAllProducts(this.currentPage, this.size)
      .subscribe((_products) => {
        if (!this.products) {
          this.products = new Array<Product>(..._products);
        } else this.products.push(..._products);
      });
    this.nextPage();
  }

  getCategories(): void {
    this.categoriesSubscription = this.categoryService
      .getAllCategories()
      .subscribe((_categories) => {
        this.categories = _categories;
      });
  }

  getNewProducts(): void {
    this.productsSubscription = this.productService
      .getNewProducts()
      .subscribe((_newProducts) => {
        this.newProducts = _newProducts;
      });
  }


  private nextPage(): void {
    this.currentPage++;
  }
}

