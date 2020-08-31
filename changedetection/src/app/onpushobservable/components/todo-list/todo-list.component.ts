import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from 'src/app/models';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { first, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  private state: State = {
    todos: [
      {
        title: 'First Todo!',
        description: 'Do all the things!',
      },
      { title: 'Second Todo', description: 'Less things' },
      { title: 'Third Todo', description: 'Maybe something' },
    ],
    otherState: 'The other state',
  };
  private stateSubject: BehaviorSubject<State> = new BehaviorSubject(
    this.state
  );
  private state$: Observable<State> = this.stateSubject.asObservable();

  todos$: Observable<Todo[]> = this.state$.pipe(map((s) => s.todos));
  otherState$: Observable<string> = this.state$.pipe(map((s) => s.otherState));

  constructor() {}

  ngOnInit(): void {
    interval(2000).subscribe((_) => this.stateSubject.next(this.state));
  }

  onAdd(todo: Todo): void {
    this.state.todos.push(todo);
    this.stateSubject.next(this.state);
  }

  onRemove(todo: Todo): void {
    this.state.todos = this.state.todos.filter((t) => t !== todo);
    this.stateSubject.next(this.state);
  }

  get testChangeRendering(): boolean {
    console.log('Render TodoListComponent');
    return true;
  }
}

interface State {
  todos: Todo[];
  otherState: string;
}
