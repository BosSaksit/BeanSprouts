import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.page.html',
  styleUrls: ['./bill-add.page.scss'],
})
export class BillAddPage implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: 'เพิ่มการเก็บเงิน',
      message: 'ต้องการเพิ่มการเก็บเงินหรือไม่',
      buttons: ['OK','cancel']
    });

    await alert.present();
  }

  

}
