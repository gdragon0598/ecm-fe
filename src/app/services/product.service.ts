import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { BASE_URL } from '../../environment';
@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private httpClient: HttpClient) { }

    getAllProducts(
        currentPage: number
        , size: number
    ): Observable<Array<Product>> {
        return this.httpClient.get<Array<Product>>(
            `${BASE_URL}/products?page=${currentPage}&size=${size}`
        );

    }

    getProductsByCategoryId(
        categoryId: number,
        currentPage: number,
        size: number
    ): Observable<Array<Product>> {
        return this.httpClient.get<Array<Product>>(
            `${BASE_URL}/products/category/${categoryId}?page=${currentPage}&size=${size}`
        );
    }

    getNewProducts(
        currentPage: number = 0,
        size: number = 6
    ): Observable<Array<Product>> {
        return this.httpClient.get<Array<Product>>(
            `${BASE_URL}/products/new?page=${currentPage}&size=${size}`
        );
    }


}
