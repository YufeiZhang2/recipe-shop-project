import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { RecipeListComponent } from "./recipe-book/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShopEditComponent } from './shopping-list/shop-edit/shop-edit.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeBookComponent,
    RecipeDetailComponent,
    ShopEditComponent,
    RecipeItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
