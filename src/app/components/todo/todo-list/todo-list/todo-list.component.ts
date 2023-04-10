import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../todo";
import {TodoStoreService} from "../../../../store/todo/todo-store.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  isLoading$: Observable<Boolean>
  todos$: Observable<Todo[]>;

  constructor(private todoStoreService: TodoStoreService) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.todoStoreService.isLoading()
    this.todos$ = this.todoStoreService.getTodos()
  }

  selectTodo(todo:Todo) {
    if (todo.selected) {
      this.todoStoreService.unselectTodo(todo.id)
    } else {
      this.todoStoreService.selectTodo(todo.id)
    }
  }

  toggleFavorite(todo: Todo) {
    this.todoStoreService.toggleFavorite(todo)
  }
}
