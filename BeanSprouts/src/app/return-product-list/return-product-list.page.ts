import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-return-product-list',
  templateUrl: './return-product-list.page.html',
  styleUrls: ['./return-product-list.page.scss'],
})
export class ReturnProductListPage implements OnInit {

  constructor(public alertController: AlertController,public route: Router) { }

  ngOnInit() {
  }

  
}
