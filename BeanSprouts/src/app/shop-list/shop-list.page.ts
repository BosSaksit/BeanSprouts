import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {

  constructor(public router:Router, public callapi:CallapiService) { 
   
  }

  ngOnInit() {
    // this.callapi.checkStateMenuBar = "1";
  }

  gotoShopAdd(){
    this.router.navigate(['/shop-add']);
  }

}
