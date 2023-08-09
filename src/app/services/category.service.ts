import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { BASE_URL } from '../../environment';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {

    constructor(private httpClient: HttpClient) { }

    getAllCategories(
    ): Observable<Array<Category>> {
        return this.httpClient.get<Array<Category>>(
            `${BASE_URL}/categories`
        );
    }
}
