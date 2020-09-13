import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test', 
            'https://www.cookingclassy.com/wp-content/uploads/2018/04/teriyaki-chicken-15.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('Brocolli',5)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is simply a test', 
            'https://www.cookingclassy.com/wp-content/uploads/2018/04/teriyaki-chicken-15.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('Bread',2)
            ])
      ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}