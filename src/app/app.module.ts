import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TodoListComponent} from './components/todo/todo-list/todo-list/todo-list.component';
import {HttpClientModule} from "@angular/common/http";
import {TODO_FEATURE_NAME, todoReducer} from "./store/todo/todo.reducer";
import {TodoEffects} from "./store/todo/todo.effects";
import {TodoComponent} from './components/todo/todo/todo.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      [TODO_FEATURE_NAME]: todoReducer,
      // add more reducers here
    }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({name: 'How to NgRx Store'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
