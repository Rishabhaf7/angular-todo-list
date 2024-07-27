import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo;
  @Input() i : number | undefined;
  @Output() tododelete :EventEmitter<Todo>=new EventEmitter();

  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter(); 
  OnClick(todo:Todo){
    this.tododelete.emit(todo);
    console.log("Your todo deleted.");
  }

  OnCheckboxclick(todo :any)
  {
    console.log(todo);
    this.todoCheckbox.emit(todo);
    console.log(todo);
  }
}
