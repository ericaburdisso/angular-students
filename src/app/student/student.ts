import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: any[] =
  [{name: "pippo", city: "topolino", gender: "M", present: true},
  {name: "pluto", city: "topolino", gender: "M", present: false}, 
  {name: "paperino", city: "paperopoli", gender: "M", present: true},
  {name: "minnie", city: "topolina", gender: "F", present: true},
  {name: "paperina", city: "topolino", gender: "F", present: false},
  {name: "cerone", city: "topolino", gender: "M", present: true}
  ];

}
