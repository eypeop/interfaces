import { Component } from '@angular/core';
import { StudentComponent } from './student/student.component';

 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  export class AppComponent {}
  export class YourModule { }