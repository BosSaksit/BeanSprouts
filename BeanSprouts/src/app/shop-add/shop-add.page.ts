import { Component, OnInit } from '@angular/core';
import { shop } from '../models/shop';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.page.html',
  styleUrls: ['./shop-add.page.scss'],
})
export class ShopAddPage implements OnInit {

  datashop:shop;
  data:FormGroup;
  submitRequested: boolean = false;
  constructor(public formbuilder:FormBuilder, public alertController: AlertController) { 
    this.data = this.formbuilder.group({
      'idshop':[null,Validators.required],
      'nameshop':[null,Validators.required]
    });
  }

  ngOnInit() {
  }

  get f() { return this.data.controls; }

  public isValid(name: string): boolean {
    var ctrl = this.data.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  async AlertDonedata() {
    this.submitRequested = true;
    console.log(this.data);
    console.log(this.data.value);
    this.datashop = this.data.value;
    console.log(this.datashop);
    
    // console.log(this.data.idshop);
    // console.log(this.data.nameshop);
    // this.datashop.shopId = this.data.idshop;
    // this.datashop.shopName = this.data.nameshop;
    // console.log(this.datashop.shopId);
    
    // const alert = await this.alertController.create({
    //   header: 'ยืนยันการเพิ่มข้อมูล',
    //   message: 'คุณต้องการเพิ่มข้อมูลสาขา ' + this.nameshop + ' หรือไม่ ?',
    //   buttons: [
    //     {
    //       text: 'ยกเลิก',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: (blah) => {
    //         console.log('Confirm Cancel: blah');
    //       }
    //     }, {
    //       text: 'ยืนยัน',
    //       handler: () => {
    //         console.log('Confirm Okay');        
    //       }
    //     }
    //   ]
    // });

    // await alert.present();
  }

}
