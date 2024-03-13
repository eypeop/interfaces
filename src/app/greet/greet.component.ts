import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  standalone: true,
  imports: [],
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = "Steve";

  greet(): void {
      alert("Hello " + this.name);
  };

}
