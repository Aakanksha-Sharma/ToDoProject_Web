import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-to-do-home-page',
  templateUrl: './to-do-home-page.component.html',
  styleUrls: ['./to-do-home-page.component.css']
})
export class ToDoHomePageComponent {
constructor(private router: Router) {}  



createToDo = new FormGroup({
  task: new FormControl('', [Validators.required]),
  interval: new FormControl('', [Validators.required]),
  priority: new FormControl('', [Validators.required]),
  viewInterval: new FormControl('')
});

onCreate(){
  console.log(this.createToDo.value);
}

onView(){
  console.log(this.createToDo.value.viewInterval);
  this.router.navigateByUrl('/view')
}
}
