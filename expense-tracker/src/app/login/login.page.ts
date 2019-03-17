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
  constructor( private service : DataService,private router : Router) { }

  ngOnInit() {
    
  }

  login(){
    var user = "prasanth"
    var pass = "1234"
    if(this.username != null && this.password != null){
      if(this.username == user && this.password == pass){
        // console.log('username and password',this.username,this.password)
        // this.service.setUserDetails(this.username,this.password);
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
