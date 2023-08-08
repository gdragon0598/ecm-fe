import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

const STORE_BASE_URL = 'http://localhost:8081';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private currentPage = 0;
    private size = 5;

    constructor(private httpClient: HttpClient) { }

    getAllProducts(
    ): Observable<Array<Product>> {
        return this.httpClient.get<Array<Product>>(
            `${STORE_BASE_URL}/products?page=${this.currentPage}&size=${this.size}`
        );
    }

    public nextPage(): void {
        this.currentPage++;
    }
}
