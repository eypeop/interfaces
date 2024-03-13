import { Component } from '@angular/core';
import { GreetComponent } from './greet/greet.component';
import { StudentComponent } from './student/student.component';


 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GreetComponent, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  export class AppComponent {}