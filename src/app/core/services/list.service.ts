import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private readonly allCategoriesUrl = 'http://localhost:8000/view/allCategories';
  private readonly allProductsUrl = 'http://localhost:8000/view/allProducts';
  private readonly allRecipesUrl = 'http://localhost:8000/view/allRecipes/';
  private readonly getRecipeDetailsUrl = 'http://localhost:8000/view/details/';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.allCategoriesUrl);
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.allProductsUrl);
  }

  getAllRecipes(id): Observable<Array<Recipe>> {
    return this.http.get<Array<Recipe>>(this.allRecipesUrl + id);
  }

  getRecipeDetails(id):Observable<Recipe> {
    return this.http.get<Recipe>(this.getRecipeDetailsUrl + id);
  }
}