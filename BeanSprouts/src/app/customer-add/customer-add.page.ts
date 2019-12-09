import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.page.html',
  styleUrls: ['./customer-add.page.scss'],
})
export class CustomerAddPage implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: 'เพิ่มการเพิ่มลูกค้า',
      message: 'ต้องการเพิ่มลูกค้าหรือไม่',
      buttons: ['OK','cancel']
    });

    await alert.present();
  }
}
