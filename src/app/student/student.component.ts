import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor() { }
  students: any[] = [
    {
    ID: 'std101', FirstName: 'Jane', LastName: 'Tiwars',
    Branch: 'CSE', DOB: '29/02/1988', Gender: 'Female'
    },
    {
    ID: 'std102', FirstName: 'Andy', LastName: 'Mohan', 
    Branch: 'ETC', DOB: '23/05/1989', Gender: 'Male'
    },
    {
    ID: 'std103', FirstName: 'Patricia', LastName: 'Dungan', 
    Branch: 'CSE', DOB: '24/07/1992', Gender: 'Female'
    },
    {
    ID: 'std104', FirstName: 'Nina', LastName: 'Sharp', 
    Branch: 'ETC', DOB: '19/08/1990', Gender: 'Female'
    },
    {
    ID: 'std105', FirstName: 'Samuel', LastName: 'Stone', 
    Branch: 'CSE', DOB: '12/94/1991', Gender: 'Male'
    }
    ];
    }
    


