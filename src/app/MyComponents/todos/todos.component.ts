import { Component, Input, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  Localitem: string ; 
  todos: Todo[];
  ngOnInit(): void {
  }
  constructor(){
    this.Localitem = localStorage.getItem("todos") as string;
    if(this.Localitem == null)
      {
        this.todos=[]
      }
      else
      {
        this.todos=JSON.parse(this.Localitem);
      }
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  AddTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  ToggleTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
