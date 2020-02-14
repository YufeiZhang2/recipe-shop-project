import { Recipe } from "./../recipe-book.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "test",
      "this is a test",
      "https://images.food52.com/7_lNKwqOJ1DS7aJ96keygWzOk9M=/1536x1022/d4a10002-0bd0-441a-a0fd-9e2143748e0b--2019-0405_caramelized-cream-eggs-genius-recipes_3x2_ty-mecham_001.jpg"
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}
