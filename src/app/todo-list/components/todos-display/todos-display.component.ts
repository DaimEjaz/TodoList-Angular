import { Component, OnInit,Input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos-display',
  templateUrl: './todos-display.component.html',
  styleUrls: ['./todos-display.component.css']
})
export class TodosDisplayComponent implements OnInit {

  @Input() todos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
