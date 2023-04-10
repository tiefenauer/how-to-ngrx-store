import {Component, Input} from '@angular/core';
import {Todo} from "../todo-list/todo";
import {TodoStoreService} from "../../../store/todo/todo-store.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo

  constructor(private todoStoreService: TodoStoreService) {
  }

  closeTodo() {
    this.todoStoreService.unselectTodo(this.todo.id)
  }

  toggleFavorite() {
    this.todoStoreService.toggleFavorite(this.todo)
  }
}
