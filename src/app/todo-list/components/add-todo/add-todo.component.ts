import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  //Forms values
  title:string = '';
  description:string = '';

  //Current Todo:
  newTodo!:Todo;


  @Output() btnClick = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    if(this.title !== "" && this.description!== ""){
      this.newTodo = {title:this.title, description: this.description};
      console.log(this.newTodo);
      this.btnClick.emit(this.newTodo)
      this.title = "";
      this.description = "";

    }else{
      alert("Some information is missing")
    }
    

  }

}
