import { RecipeService } from "./recipe.service";
import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe-book.model";

@Component({
  selector: "app-recipe-book",
  templateUrl: "./recipe-book.component.html",
  styleUrls: ["./recipe-book.component.css"],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  currentRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.currentRecipe = recipe;
    });
  }
}
