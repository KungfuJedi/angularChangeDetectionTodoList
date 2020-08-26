import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from 'src/app/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    {
      title: 'First Todo!',
      description: 'Do all the things!',
    },
    { title: 'Second Todo', description: 'Less things' },
    { title: 'Third Todo', description: 'Maybe something' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAdd(todo: Todo): void {
    this.todos.push(todo);
  }

  onRemove(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  get testChangeRendering(): boolean {
    console.log('Render TodoListComponent');
    return true;
  }
}
