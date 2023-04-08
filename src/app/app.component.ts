import {Component, OnInit} from '@angular/core';
import {TodoStoreService} from "./store/todo/todo-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'how-to-ngrx-store';

  constructor(private todoStoreService: TodoStoreService) {
  }

  ngOnInit(): void {
    this.todoStoreService.loadTodos()
  }
}
