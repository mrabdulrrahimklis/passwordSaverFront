import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {ListComponent} from "./pages/list/list.component";
import {NewComponent} from "./pages/new/new.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'add',
    component: NewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
