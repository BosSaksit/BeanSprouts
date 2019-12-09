import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CallapiService } from './service/callapi.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public checkState:any;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Order',
      url: '/order',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router:Router,
    public callapi:CallapiService
  ) {
    // this.callapi.checkStateMenuBar = "1";
    this.callapi.checkStateMenuBar = this.checkState;
    console.log(this.callapi.checkStateMenuBar);
    console.log(this.checkState);
    
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  gotoOrder(){
    this.router.navigate(['/order']);
  }

  gotoShop(){
    this.router.navigate(['/shop-list']);
  }

  gotoProduct(){
    this.router.navigate(['/product-list']);
  }

  gotoUser(){
    this.router.navigate(['/user-list']);
  }

  gotoTransfer(){
    this.router.navigate(['/transfer']);
  }

  gotodebtReduc(){
    this.router.navigate(['/debtreduction-list']);
  }

}
