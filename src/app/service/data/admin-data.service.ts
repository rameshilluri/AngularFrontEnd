import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, ADMIN_JPAAPI_URL } from 'src/app/app.constants';
import { UpdatePasswordComponent, Admin } from 'src/app/update-password/update-password.component';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

 
  constructor(
    private http:HttpClient
  ) { }
  retrieveAllAdmins(username){
    return this.http.get<Admin[]>(`${ADMIN_JPAAPI_URL}/users/${username}/admins`);
   // console.log("execute hello world service");
  }

  deleteAdmin(username,id){
    return this.http.delete(`${ADMIN_JPAAPI_URL}/users/${username}/admins/${id}`)
  }

  retrieveAdmin(username,id){
    return this.http.get<Admin>(`${ADMIN_JPAAPI_URL}/users/${username}/admins/${id}`)
  }
  updateAdmin(username,id,admin){
    return this.http.put(`${ADMIN_JPAAPI_URL}/users/${username}/admins/${id}`,admin)
  }
  createAdmin(username,id,admin){
    return this.http.post(`${ADMIN_JPAAPI_URL}/users/${username}/admins`,admin)
  }
}
