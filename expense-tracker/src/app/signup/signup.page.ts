import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username : string;
  name     : string;
  password : string;
  constructor(private router : Router,private dataService : DataService) { }

  ngOnInit() {
  }
  
  signup(){
    if(this.username != null && this.name != null && this.password != null){
      this.router.navigate(['home']);
    }
    else{
      this.dataService.loginAlert();
    }
  }

}
