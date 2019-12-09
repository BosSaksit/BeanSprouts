import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.page.html',
  styleUrls: ['./order-add.page.scss'],
})
export class OrderAddPage implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: 'เพิ่มการสั่งซื้อ',
      message: 'ต้องการเพิ่มการสั่งซื้อหรือไม่',
      buttons: ['OK','cancel']
    });

    await alert.present();
  }

}
