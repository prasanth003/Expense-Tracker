import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  
  expenseForm = new FormGroup({
      date        : new FormControl(''),
      amount      : new FormControl(),
      category    : new FormControl(''),
      source      : new FormControl(''),
      trType      : new FormControl(''),
      description : new FormControl(''),  
    })

  constructor(public service : DataService) { }

  ngOnInit() {
  }
  setExpense(){

    console.log('form values are',this.expenseForm.value)
    this.service.setExpense(this.expenseForm.value)
  }
}
