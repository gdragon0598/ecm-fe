import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemComponent } from './sidebar/item/item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  products: Array<Product> | undefined;
  productsSubscription: Subscription | undefined;

  firstSideBar: SidebarComponent = {
    title: "Nổi bật",
    listItems: [
      {
        content: "Tiki ChatGPT",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/upload/a0/c9/78/cddabc413834de509f40455498c7ff47.png.webp"
      },
      {
        content: "Astra Reward",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/upload/cb/64/f7/0ebb0ae297f052e34a8161c9bf8efb96.png.webp"
      },
      {
        content: "Tiki Exchange",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png.webp"
      },
      {
        content: "Giá rẻ mỗi ngày",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/upload/ae/72/a3/d4503c3ece932dc8c57d2d5c97cd6ffc.png.webp"
      },
      {
        content: "Xả kho",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp"
      },
      {
        content: "Mã giảm giá",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp"
      },
      {
        content: "Ưu đãi thẻ, ví",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp"
      },
      {
        content: "Đóng tiền, nạp thẻ",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp"
      },
      {
        content: "Mua trước trả sau",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp"
      },
      {
        content: "Bảo hiểm Tiki360",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png.webp"
      }
    ]
  };
  secondSideBar: SidebarComponent = {
    title: "Danh mục",
    listItems: [
      {
        content: "Đồ chơi - Mẹ và bé",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
      },
      {
        content: "Điện thoại - Máy tính bảng",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp"
      },
      {
        content: "Làm đẹp - Sức khoẻ",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp"
      },
      {
        content: "Điện gia dụng",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp"
      },
      {
        content: "Thời trang nữ",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp"
      },
      {
        content: "Thời trang nam",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp"
      },
      {
        content: "Giày - dép nữ",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp"
      },
      {
        content: "Túi thời trang nữ",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp"
      },
      {
        content: "Giày - dép nam",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp"
      },
      {
        content: "Túi thời trang nam",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp"
      },
      {
        content: "Balo và vali",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp"
      },
      {
        content: "Phụ kiện thời trang",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp"
      },
      {
        content: "Đồng hồ trang sức",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp"
      },
      {
        content: "Laptop - máy vi tính",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png.webp"
      },
      {
        content: "Nhà cửa - Đời sống",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp"
      },
      {
        content: "Hàng quốc tế",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png.webp"
      },
      {
        content: "Thể thao dã ngoại",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp"
      },
      {
        content: "Điện tử - Điện lạnh",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp"
      },
      {
        content: "Máy ảnh - Máy quay phim",
        imageUrl: "https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp"
      }
    ]
  };
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

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }
  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  getProducts(): void {
    this.productsSubscription = this.productService
      .getAllProducts()
      .subscribe((_products) => {
        if (!this.products) {
          this.products = new Array<Product>(..._products);
        } else this.products.push(..._products);
      });
    this.productService.nextPage();
  }
}

