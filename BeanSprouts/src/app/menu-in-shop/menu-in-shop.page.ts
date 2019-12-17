import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-menu-in-shop',
  templateUrl: './menu-in-shop.page.html',
  styleUrls: ['./menu-in-shop.page.scss'],
})
export class MenuInShopPage implements OnInit {

  nameShop:string;

  constructor(public callapi:CallapiService,public actived:ActivatedRoute, public router:Router) { 
    this.callapi.getNameShop = this.actived.snapshot.paramMap.get('_nameshop');
    console.log(this.callapi.getNameShop);
    this.nameShop = this.callapi.getNameShop;
  }

  ngOnInit() {
  }

  gotoAccounting(){
    this.router.navigate(['/bill-list']);
  }

  gotoLine(){
    this.router.navigate(['/truck-list']);
  }

  gotoCustomer(){
    this.router.navigate(['/customer-list']);
  }

  gotoCashier(){
    this.router.navigate(['/bill-table']);
  }

  gotoStore(){
    this.router.navigate(['/store-list']);
  }

  gotoOrder(){
    this.router.navigate(['/order-add']);
  }

  gotoLogout(){
    this.router.navigate(['/loginpage'])
  }

}
