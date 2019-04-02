import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public uri: "http://127.0.0.1:3000/"
  expense: any;
  expenseAmount: number;
  isLoading = false;
  walletBalance: number;
  constructor(private alertController: AlertController, private http: HttpClient, public loadingController: LoadingController, public toastController: ToastController, private router: Router) {
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

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Expense added successfully.',
      buttons: ['OK']
    });

    await alert.present();
  }


  async setExpense(formData) {
    const alert = await this.alertController.create({
      header: 'Are you sure want to add Expense',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'primary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Yes',
        cssClass: 'primary',
        handler: async () => {
          this.router.navigate(['home']);
            return this.http.post('http://139.59.70.163:3200/add-expense', formData).subscribe(res => {
              console.log(res);
            },
            err => {
              this.errorAlert();
            })
        }
      }]
    })
    await alert.present();

  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  getAllExpense() {
    return this.http.get('http://139.59.70.163:3200/get-expense');
  }
  getTotalExpense() {
    this.getAllExpense().subscribe(res => {
      this.expense = res;
      var amount = 0;
      this.expense.forEach(element => {
        amount = amount + element.amount;
      });
      this.expenseAmount = amount;
    })
  }
  getExpenseAmount() {
    this.getTotalExpense();
    return this.expenseAmount;

  }

  setBalance(balance) {
    this.walletBalance = balance;
    console.log('balance', this.walletBalance)
  }

  getBalance() {
    return this.walletBalance;
  }

}
