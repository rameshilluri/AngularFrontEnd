import { Injectable } from '@angular/core';
import {cloneDeep} from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
user=[];
password2=[];
  constructor() { }

  authenticate(username,password){
    // console.log('before'+this.isUserLoggedIn());
    console.log('authenticate'+this.user);
    console.log('authenticate'+this.password2);
let use1=this.user;
let password3 = this.password2;
if(username === cloneDeep(use1)  && password===cloneDeep(password3)){

sessionStorage.setItem('authenticaterUser',username);
console.log('after auth'+ use1 +"    "+password3);
return true
}else{ 

    if(username === "admin"  && password==="password" ){
      sessionStorage.setItem('authenticaterUser',username);
      console.log('after auth'+ use1 +"    "+password3);
      return true
  }else return false
}

}

  update(username,password){
  
    if(username !=""&&password!=""){
      
      sessionStorage.setItem('authenticaterUser',JSON.stringify(username));
      sessionStorage.setItem('authenticaterPassword',JSON.stringify(password));
      this.user = JSON.parse(sessionStorage.getItem('authenticaterUser'));
     this.password2 = JSON.parse(sessionStorage.getItem('authenticaterPassword'));
    console.log('update'+this.user);
    console.log('update'+this.password2);

      return true
  }else return false}

  isUserLoggedIn(){
   let user = sessionStorage.getItem('authenticaterUser')
  return !(user===null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
