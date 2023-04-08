import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../todo/todo";
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
}
