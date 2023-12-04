import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-to-do-home-page',
  templateUrl: './to-do-home-page.component.html',
  styleUrls: ['./to-do-home-page.component.css']
})
export class ToDoHomePageComponent {
constructor(private router: Router, private http: HttpClient) {}  



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
  const header = new HttpHeaders();
  header.set('Access-Control-Allow-Origin', '*');
   //calling view api
   this.http.get('http://localhost:8080/getTaskDetail', { headers: header }).subscribe(res => {

      console.log("-----------------------------------------");
      console.log("Response-------",res);
      this.router.navigateByUrl('/view');
   });
  
 
}
}
