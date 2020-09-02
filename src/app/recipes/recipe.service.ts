import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2018/04/teriyaki-chicken-15.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2018/04/teriyaki-chicken-15.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}