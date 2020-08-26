import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Todo } from 'src/app/models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRemove(): void {
    this.remove.emit(this.todo);
  }

  get testChangeRendering(): boolean {
    console.log('Render TodoComponent');
    return true;
  }
}
