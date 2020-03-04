import { Ingredient } from "./../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient("banana", 3)];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addToShoppingList(ingredientsAdded: Ingredient[]) {
    this.ingredients.push(...ingredientsAdded);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
