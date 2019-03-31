import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.page.html',
  styleUrls: ['./view-expense.page.scss'],
})
export class ViewExpensePage implements OnInit {
  data : any;
  constructor(public service : DataService) { }

  ngOnInit() {
    this.service.getAllExpense().subscribe(res => {
      console.log('get all expense',res);
      this.data = res;
    },err => {
      this.service.errorAlert();
    })
  }


}
