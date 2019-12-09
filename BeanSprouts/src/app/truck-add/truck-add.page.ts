import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-truck-add',
  templateUrl: './truck-add.page.html',
  styleUrls: ['./truck-add.page.scss'],
})
export class TruckAddPage implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: 'เพิ่มสายส่ง',
      message: 'ต้องการเพิ่มสายส่งหรือไม่',
      buttons: ['OK','cancel']
    });

    await alert.present();
  }
}
