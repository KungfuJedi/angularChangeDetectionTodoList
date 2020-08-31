import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushobservableRoutingModule } from './onpushobservable-routing.module';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

@NgModule({
  declarations: [TodoListComponent, TodoComponent, NewTodoComponent],
  imports: [CommonModule, OnpushobservableRoutingModule, FormsModule],
  exports: [TodoListComponent],
})
export class OnpushobservableModule {}
