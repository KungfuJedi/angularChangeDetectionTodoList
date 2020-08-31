import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Todo } from 'src/app/models';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTodoComponent implements OnInit {
  @Output() add: EventEmitter<Todo> = new EventEmitter();

  title: string;
  description: string;

  constructor() {}

  ngOnInit(): void {}

  onAdd(): void {
    this.add.emit({
      title: this.title,
      description: this.description,
    });
    this.title = '';
    this.description = '';
  }

  get testChangeRendering(): boolean {
    console.log('Render NewTodoComponent');
    return true;
  }
}
