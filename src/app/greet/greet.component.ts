import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  standalone: true,
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
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
