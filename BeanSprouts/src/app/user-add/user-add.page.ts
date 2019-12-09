import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})
export class UserAddPage implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: 'เพิ่มพนักงาน',
      message: 'ต้องการเพิ่มพนักงานหรือไม่',
      buttons: ['OK','cancel']
    });

    await alert.present();
  }

}
