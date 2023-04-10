import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoStoreService} from "./store/todo/todo-store.service";
import {filter, Observable, Subscription} from "rxjs";
import {Todo} from "./components/todo/todo-list/todo-list-item/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'how-to-ngrx-store';
  selectedTodo$: Observable<Todo>;
  hasSelectedTodo = false;

  private readonly subscription = new Subscription()

  constructor(private todoStoreService: TodoStoreService) {
  }

  ngOnInit(): void {
    this.todoStoreService.loadTodos()
    this.selectedTodo$ = this.todoStoreService.getSelectedTodo()
      .pipe(filter(selectedTodo => !!selectedTodo));
    this.subscription.add(
      this.todoStoreService.getSelectedTodo().subscribe(selectedTodo => this.hasSelectedTodo = !!selectedTodo)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
