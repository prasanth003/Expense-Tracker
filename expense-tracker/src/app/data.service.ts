import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public uri : "http://127.0.0.1:3000/"
  expense: any;
  expenseAmount: number;
  constructor(private alertController : AlertController, private http : HttpClient) {
    this.getTotalExpense();
   }

  async loginAlert() {
    const alert = await this.alertController.create({
      header: 'Authentication failed',
      message: 'Some values are missing.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async validationAlert() {
    const alert = await this.alertController.create({
      header: 'Authentication failed',
      message: 'Username or password wrong',
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Failed',
      message: 'Something went wrong',
      buttons: ['OK']
    });

    await alert.present();
  }

  setExpense(formData){
    return this.http.post('http://127.0.0.1:3200/add-expense', formData).subscribe(res => {
      console.log('success');
    },
    err => {
      console.log(err)
    })
  }
  
  getAllExpense(){
    return this.http.get('http://127.0.0.1:3200/get-expense');
  }
  getTotalExpense(){
    this.getAllExpense().subscribe(res => {
      this.expense = res;
      var amount = 0;
      this.expense.forEach(element => {  
        amount = amount+element.amount;
      });
      this.expenseAmount = amount;
    })
  }
  getExpenseAmount(){
    this.getTotalExpense();
    return this.expenseAmount;

  }
  
}
