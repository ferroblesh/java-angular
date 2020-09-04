import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {
  todos=[
    {id: 1, description: 'Learn angular'},
    {id: 2, description: 'Learn play guitar'},
    {id: 3, description: 'Learn js'},
   ]
  todo={
    id:1,
    description: 'Learn to Dance'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
