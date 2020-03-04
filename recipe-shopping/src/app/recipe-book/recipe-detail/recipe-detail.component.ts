import { RecipeService } from "./../recipe.service";
import { Component, OnInit } from "@angular/core";
import { Recipe } from "./../recipe-book.model";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  addIngredientsToCart() {
    this.recipeService.addToCart(this.selectedRecipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
}
