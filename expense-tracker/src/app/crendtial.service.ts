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

  getUserDetails(){
    return this.userData
  }

}
