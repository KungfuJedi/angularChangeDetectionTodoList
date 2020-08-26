import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushRoutingModule } from './onpush-routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoComponent, NewTodoComponent],
  imports: [CommonModule, OnpushRoutingModule, FormsModule],
  exports: [TodoListComponent],
})
export class OnpushModule {}
