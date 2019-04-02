import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.page.html',
  styleUrls: ['./view-expense.page.scss'],
})
export class ViewExpensePage implements OnInit {
  data : any;
  isLoading = false;

  constructor(public service : DataService, public loadingController: LoadingController) { }

  async ngOnInit() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 10000,
      message : "We are fetching datas..."
    }).then(req => {
        req.present().then(()=> {
          this.service.getAllExpense().subscribe(res => {
            this.data = res;
            if (this.isLoading) {
              req.dismiss().then(() => console.log('abort presenting'));
            }
        },err => {
          if (this.isLoading) {
            req.dismiss().then(() => console.log('abort presenting'));
          }
          this.service.errorAlert();
        })
      })
    })
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }


}
