import { Component, OnInit } from '@angular/core';
import { CrendtialService } from '../crendtial.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;
  userData : any;
  constructor( private service : DataService,private router : Router,private userService : CrendtialService) { }

  ngOnInit() {
    
  }

  login(){
    var user = "prasanth"
    var pass = "1234"
    this.userData = this.userService.getUserDetails();
    if(this.username != null && this.password != null){
      if(this.username == user && this.password == pass){
        this.router.navigate(['home'])
      }
      else if(this.username === this.userData.username && this.password === this.userData.password){
        this.router.navigate(['home'])
      }
      else{
        this.service.validationAlert();
      }
    }
    else{
      this.service.loginAlert();
    }
    
  }
}
