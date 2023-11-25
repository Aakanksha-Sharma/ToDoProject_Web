import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToDoHomePageComponent } from './components/to-do-home-page/to-do-home-page.component';
import { ViewTodoComponentComponent } from './view-todo-component/view-todo-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ToDoHomePageComponent,
    ViewTodoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
