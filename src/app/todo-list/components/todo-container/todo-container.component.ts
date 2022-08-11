import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  //All todos

  todoArr: Todo[] =[];
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo : Todo){
    console.log(todo);

    this.todoArr.push(todo);
    console.log(this.todoArr);
  }

}
