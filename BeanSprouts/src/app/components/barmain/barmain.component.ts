import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barmain',
  templateUrl: './barmain.component.html',
  styleUrls: ['./barmain.component.scss'],
})
export class BarmainComponent implements OnInit {

  constructor(public router:Router) { }

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

}
