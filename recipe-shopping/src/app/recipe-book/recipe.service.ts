import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe-book.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "A Test",
      "This is a simply test",
      "https://mdn.mozillademos.org/files/16042/model-view-controller-light-blue.png",
      [new Ingredient("buns", 2), new Ingredient("beef", 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToCart(selectedIngredients: Ingredient[]) {
    this.shoppingListService.addToShoppingList(selectedIngredients);
  }
}
