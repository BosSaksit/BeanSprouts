import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoShopAdd(){
    this.router.navigate(['/shop-add']);
  }

}
