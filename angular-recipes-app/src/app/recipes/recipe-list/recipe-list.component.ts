import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../recipes/recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Test Recipe - 1',
    'This is a test recipe - 1',
    'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn'),
  new Recipe('Test Recipe - 2',
    'This is a test recipe - 2',
    'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/huli-huli-chicken-wings-ft-recipe0619.jpg?itok=4ltg7GWT'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
