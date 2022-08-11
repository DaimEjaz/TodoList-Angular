import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { ButtonComponent } from './components/button/button.component';
import { TodosDisplayComponent } from './components/todos-display/todos-display.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddTodoComponent,
    TodoContainerComponent,
    ButtonComponent,
    TodosDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoContainerComponent
  ]
})
export class TodoListModule { }
