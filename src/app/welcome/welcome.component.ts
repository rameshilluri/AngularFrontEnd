import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
message='Some Welcome Message'
name=''
welcomeMessageFromService:string
  constructor(private service:WelcomeDataService,private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message)
    this.name = this.route.snapshot.params['username']
  }
  getWelcomeMessage(){
   //console.log( this.service.executeHelloWorldBeanService());
   this.service.executeHelloWorldBeanService().subscribe(
   // response =>console.log(response.message)
    response => this.handleSuccessfulResponse(response),
    error =>this.handleErrorResponse(error) );
  //console.log("last line of getWelcomeMessage");  //console.log("get Welcome message");
  }
  getWelcomeMessageWithParameter(){
    //console.log( this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
    // response =>console.log(response.message)
     response => this.handleSuccessfulResponse(response),
     error =>this.handleErrorResponse(error) );
   //console.log("last line of getWelcomeMessage");  //console.log("get Welcome message");
   }
  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message;
    //console.log(response);
   // console.log(response.message);
  }
  handleErrorResponse(error){
    // console.log(error)
    // console.log(error.error)
    // console.log(error.error.message)
    this.welcomeMessageFromService=error.error.message
  }

}
