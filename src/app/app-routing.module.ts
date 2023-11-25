import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoHomePageComponent } from './components/to-do-home-page/to-do-home-page.component';
import { ViewTodoComponentComponent } from './view-todo-component/view-todo-component.component';

const routes: Routes = [
  {
    component:ToDoHomePageComponent,
    path:''
  },
  {
    component:ViewTodoComponentComponent,
    path:'view'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
