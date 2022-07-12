import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCalcComponent } from "./item-calc/item-calc.component";

const routes: Routes = [
  { path: 'item-calc', component: ItemCalcComponent },
  { path: '', redirectTo: '/item-calc', pathMatch: 'full' },
  { path: '**', component: ItemCalcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
