import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipe-list.component.html',
    styleUrls:['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes:Recipe[] = [
        new Recipe('Test Recipe','This is a test Recipe','https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Lemon-Shrimp_EXPS_SDON16_45286__D06_09_5b-696x696.jpg'),
        new Recipe('Test Recipe','This is a test Recipe','https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Lemon-Shrimp_EXPS_SDON16_45286__D06_09_5b-696x696.jpg')
    ];

    constructor() {

    }

}