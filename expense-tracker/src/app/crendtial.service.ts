import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrendtialService {
  userData : any = {}

  constructor() { }
  
  setUserDetails(username,password){
    this.userData.username = username;
    this.userData.password = password;
    console.log('usedata',this.userData)
  }
  registerUser(username,name,password){
    this.userData.username = username;
    this.userData.name     = name;
    this.userData.password = password;
  }
  getUserDetails(){
    return this.userData
  }

}
