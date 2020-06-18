import { Component, OnInit } from '@angular/core';
  import { Admin } from '../update-password/update-password.component';
  import { Router, ActivatedRoute } from '@angular/router';
import { AdminDataService } from '../service/data/admin-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
  id:number
  admin:Admin
    constructor(private route : ActivatedRoute,
      private adminService:AdminDataService,
      private router:Router
    ) { }
  
    ngOnInit() {
      this.id=this.route.snapshot.params['id']
      this.admin=new Admin(this.id,'','');
      if(this.id!=-1){
      this.adminService.retrieveAdmin('in28minutes',this.id).subscribe(data=>this.admin=data)
      }
    }
  
    saveAdmin(){
      if(this.id == -1){
        this.adminService.createAdmin('in28minutes',this.id,this.admin).subscribe(data => { console.log(data) 
          this.router.navigate(['update'])
        })
      }else{
        this.adminService.updateAdmin('in28minutes',this.id,this.admin).subscribe(data => { console.log(data) 
          this.router.navigate(['update'])
        })
      }
     
  
    }
  
    
  }
  



