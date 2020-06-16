import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id : number,
    public description :string,
    public done : boolean,
    public targetDate:Date
    ){

  }
}
@Component({
  selector: 'app-liststodo',
  templateUrl: './liststodo.component.html',
  styleUrls: ['./liststodo.component.css']
})
export class ListstodoComponent implements OnInit {
todos:Todo[]

message:String
//   todos=[
//     new Todo(1,'Learn to Dance',false,new Date()),
//     new Todo(2,'Learn to sing',false,new Date()),
//     new Todo(3,'Learn to hop',false,new Date()),
//     new Todo(4,'Learn to sleep',false,new Date()),

//     // {id:1,description:'Learn to dance'},
//     // {id:2,description:'Learn to sing'},
//     // {id:3,description:'Learn to hop'},
//     // {id:4,description:'Learn to eat'},
//     // {id:5,description:'Learn to sleep'},
//     // {id:6,description:'Learn to cook'},
//     // {id:7,description:'Learn to wash'}
// ]
// todo={
//   id:1,
//   description:'learn to dance'
// }
  constructor(
    private todoService :TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
this.refreshTodos();
  }

  refreshTodos(){this.todoService.retrieveAllTodos('in28minutes').subscribe(
    response =>{
      console.log(response);
      this.todos=response;
    }
  )}

  deleteTodo(id){
    console.log(`delete todo${id}`);
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response=>{
        console.log(response);
        this.message=`Delete ${id} Successful!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }
  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
