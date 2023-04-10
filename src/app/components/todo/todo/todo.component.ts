import {Component, Input} from '@angular/core';
import {Todo} from "../todo-list/todo-list-item/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo
}
