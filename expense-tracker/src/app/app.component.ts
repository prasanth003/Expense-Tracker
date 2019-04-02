import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Wallet',
      url: '/list',
      icon: 'wallet'
    },
    {
      title : 'Logout',
      ulr   :  '/login',
      icon  :  'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, 
    public router : Router,
    private alertController : AlertController
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.statusBar.styleLightContent();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#f16e3e');
      this.splashScreen.hide();
    });
  }

  redirctToHome(){
    this.router.navigate(['home'])
  }
  redirctToList(){
    this.router.navigate(['list'])
  }
  async redirctToLogout(){
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Are you sure want to logout',
      buttons: [{
        text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
      },{
          text: 'Yes',
          cssClass: 'primary',
          handler: async () => {
            this.router.navigate(['login'])
          }
        }
        ]
    });

    await alert.present();
    
  }
}
