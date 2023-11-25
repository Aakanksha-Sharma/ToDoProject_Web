import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-todo-component',
  templateUrl: './view-todo-component.component.html',
  styleUrls: ['./view-todo-component.component.css']
})
export class ViewTodoComponentComponent {

  constructor(private router: Router) {}  

  goBack(){
  this.router.navigateByUrl('');
  }
}
