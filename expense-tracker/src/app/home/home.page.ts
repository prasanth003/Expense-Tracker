import { Component } from '@angular/core';
import { CrendtialService } from '../crendtial.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userdata: any;
  constructor(private service : CrendtialService){}
  ngOnInit(){
    this.userdata = this.service.getUserDetails()
    console.log('user data from service',this.userdata)
  }
}
