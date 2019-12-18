import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-barmain',
  templateUrl: './barmain.component.html',
  styleUrls: ['./barmain.component.scss'],
})
export class BarmainComponent implements OnInit {

  constructor(public router:Router, public alertController:AlertController) { }

  ngOnInit() {}

  gotoOrder() {
    this.router.navigate(['/order-list']);
  }

  gotoShop() {
    this.router.navigate(['/shop-list']);
  }

  gotoProduct() {
    this.router.navigate(['/product-list']);
  }

  gotoUser() {
    this.router.navigate(['/user-list']);
  }

  gotoTransfer() {
    this.router.navigate(['/transfer']);
  }

  gotodebtReduc() {
    this.router.navigate(['/debtreduction-list']);
  }

  gotoSummaryReport(){
    this.router.navigate(['/summary-report']);
  }

  gotoLogout(){
    this.router.navigate(['/loginpage']);
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'กรุณาเลือกสาขา',
      inputs: [
        {
          name: 'checkbox1',
          type: 'radio',
          label: 'อุดรธานี',
          value: 'อุดรธานี',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'radio',
          label: 'หนองคาย',
          value: 'หนองคาย'
        },

        {
          name: 'checkbox3',
          type: 'radio',
          label: 'หนองบัวลำภู',
          value: 'หนองบัวลำภู'
        },

        {
          name: 'checkbox4',
          type: 'radio',
          label: 'ขอนแก่น',
          value: 'ขอนแก่น'
        },

        {
          name: 'checkbox5',
          type: 'radio',
          label: 'สกลนคร',
          value: 'สกลนคร'
        },

        {
          name: 'checkbox6',
          type: 'radio',
          label: 'เลย',
          value: 'เลย'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok');
            console.log(data);
            this.router.navigate(['/menu-in-shop',{_nameshop:data}]);
          }
        }
      ]
    });

    await alert.present();
  }



}
