import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  gotoAddOrder() {
    this.router.navigate(['/order-add']);
  }

  gotoDetailOrder(){
    this.router.navigate(['/order-detail'])
  }

  gotoEditOrder(){
    this.router.navigate(['/order-edit'])
  }



}
