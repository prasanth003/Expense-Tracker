import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public walletBalance : number;
  constructor(public service : DataService, private router : Router) {
  }

  ngOnInit() {
  }

  addBalance(){
    this.service.setBalance(this.walletBalance);
    this.router.navigate(['home'])
  }
}
