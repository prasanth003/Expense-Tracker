import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private alertController : AlertController) { }

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
}
