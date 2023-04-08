import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TodoComponent} from './components/todo/todo/todo.component';
import {TodoListComponent} from './components/todo/todo-list/todo-list/todo-list.component';
import {HttpClientModule} from "@angular/common/http";
import {TODO_FEATURE_NAME, todoReducer} from "./store/todo/todo.reducer";
import {TodoEffects} from "./store/todo/todo.effects";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      [TODO_FEATURE_NAME]: todoReducer,
      // add more reducers here
    }),
    EffectsModule.forRoot([TodoEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
