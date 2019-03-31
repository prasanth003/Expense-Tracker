import { Component } from '@angular/core';
// import { CrendtialService } from '../crendtial.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userdata: any;
  slideOpts = {
    effect: 'flip'
  };
  amount = 2000;
  expense: number;

  constructor(private service : DataService, private router : Router){}
  ngOnInit(){
    this.getAmount();
  }

  getExpense(){
    this.router.navigate(['view-expense']);
  }
  getAmount(){
    this.expense = this.service.getExpenseAmount();
    this.amount = this.amount - this.expense;
  }
}
