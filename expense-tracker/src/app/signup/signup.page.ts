import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CrendtialService } from '../crendtial.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username : string;
  name     : string;
  password : string;
  constructor(private router : Router,private dataService : DataService,private userService : CrendtialService ) { }

  ngOnInit() {
  }
  
  signup(){
    if(this.username != null && this.name != null && this.password != null){
      this.router.navigate(['login']);
      this.userService.registerUser(this.username,this.name,this.password);
    }
    else{
      this.dataService.loginAlert();
    }
  }

}
