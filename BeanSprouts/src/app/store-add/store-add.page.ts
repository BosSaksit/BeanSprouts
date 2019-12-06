import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.page.html',
  styleUrls: ['./store-add.page.scss'],
})
export class StoreAddPage implements OnInit {

  constructor(public route: Router) { }

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
