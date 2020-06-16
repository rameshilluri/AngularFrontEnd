import { Injectable } from '@angular/core';
import { Todo } from 'src/app/liststodo/liststodo.component';
import { HttpClient } from '@angular/common/http';
import { API_URL, TODO_JPAAPI_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${TODO_JPAAPI_URL}/users/${username}/todos`);
   // console.log("execute hello world service");
  }

  deleteTodo(username,id){
    return this.http.delete(`${TODO_JPAAPI_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username,id){
    return this.http.get<Todo>(`${TODO_JPAAPI_URL}/users/${username}/todos/${id}`)
  }
  updateTodo(username,id,todo){
    return this.http.put(`${TODO_JPAAPI_URL}/users/${username}/todos/${id}`,todo)
  }
  createTodo(username,id,todo){
    return this.http.post(`${TODO_JPAAPI_URL}/users/${username}/todos`,todo)
  }
}
