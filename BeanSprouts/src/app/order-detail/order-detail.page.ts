import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoEditOrder(){
    this.router.navigate(['/order-edit'])
  }

}
