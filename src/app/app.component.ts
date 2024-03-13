import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetComponent } from './greet/greet.component';


 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GreetComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  export class AppComponent {}