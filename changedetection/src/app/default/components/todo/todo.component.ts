import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  get testChangeRendering(): boolean {
    console.log('Render TodoComponent');
    return true;
  }

  onRemove(): void {
    this.remove.emit(this.todo);
  }
}
