import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  ngOnInit(): void {
  }
  name: string = "Lola Melnychuk";
  age: number = 20;
  mobile: string = "068299950";
  department: string = "ITRE, TR";

  constructor() { }


}
