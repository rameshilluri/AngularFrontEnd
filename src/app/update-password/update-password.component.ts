import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Router } from '@angular/router';
import { AdminDataService } from '../service/data/admin-data.service';


export class Admin {
  constructor(
    public id : number,
    public username :string,
    public password : string,
   
    ){

  }
}
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

admins:Admin[]

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
    private adminService :AdminDataService,
    private router : Router
  ) { }

  ngOnInit() {
this.refreshAdmins();
  }

  refreshAdmins(){this.adminService.retrieveAllAdmins('in28minutes').subscribe(
    response =>{
      console.log(response);
      this.admins=response;
    }
  )}

  deleteAdmin(id){
    console.log(`delete admin${id}`);
    this.adminService.deleteAdmin('in28minutes',id).subscribe(
      response=>{
        console.log(response);
        this.message=`Delete ${id} Successful!`
        this.refreshAdmins();
      }
    )
  }

  updateAdmin(id){
    console.log(`update ${id}`)
    this.router.navigate(['admins',id])
  }
  addAdmin(){
    this.router.navigate(['admins',-1])
  }
}

  

