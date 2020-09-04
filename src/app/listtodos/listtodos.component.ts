import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {
  todos=[
    new Todo(1,'Learn to dance', false, new Date()),
    new Todo(2,'Learn to write', false, new Date()),
    new Todo(3,'Learn angular', false, new Date())
   ]
  todo={
    id:1,
    description: 'Learn to Dance'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
