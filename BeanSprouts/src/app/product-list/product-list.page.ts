import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoAddProduct(){
    this.router.navigate(['/product-add']);
  }  
}
