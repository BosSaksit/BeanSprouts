import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.page.html',
  styleUrls: ['./store-edit.page.scss'],
})
export class StoreEditPage implements OnInit {

  constructor(public route: Router,public alertController: AlertController) { }

  ngOnInit() {
  }

   presentAlertConfirm() {
    const alert = document.createElement('ion-alert');
    alert.header = 'บันทึกข้อมูล';
    alert.message = 'ยืนยันการบันทึกข้อมูลหรือไม่';
    alert.buttons = [
      {
        text: 'ยกเลิก',
        role: 'ยกเลิก',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'ยืนยัน',
        handler: () => {
          console.log('Confirm Okay')
          this.route.navigate(['/store-list'])
        }
      }
    ];
  
    document.body.appendChild(alert);
    return alert.present();
  }
}
