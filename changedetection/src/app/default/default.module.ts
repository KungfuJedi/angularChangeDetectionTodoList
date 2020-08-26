import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [TodoListComponent],
  declarations: [TodoListComponent, TodoComponent, NewTodoComponent],
  imports: [CommonModule, DefaultRoutingModule, FormsModule],
})
export class DefaultModule {}
