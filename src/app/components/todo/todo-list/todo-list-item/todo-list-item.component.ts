import {Component, Input} from '@angular/core';
import {Todo} from "./todo";
import {TodoStoreService} from "../../../../store/todo/todo-store.service";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() todo: Todo

  constructor(private todoStoreService: TodoStoreService) {
  }

  selectTodo() {
    if (this.todo.selected) {
      this.todoStoreService.unselectTodo(this.todo.id)
    } else {
      this.todoStoreService.selectTodo(this.todo.id)
    }
  }
}
