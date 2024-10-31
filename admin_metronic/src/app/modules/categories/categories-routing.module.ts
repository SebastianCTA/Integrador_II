import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';

//localhost:4200/categories/list
const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path:'list',
        component: ListCategorieComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
