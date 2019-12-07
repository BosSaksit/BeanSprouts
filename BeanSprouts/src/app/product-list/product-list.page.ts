import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  constructor(public router:Router, public callapi:CallapiService) { 
    this.callapi.checkStateMenuBar = "1";
  }

  ngOnInit() {
  }

  gotoAddProduct(){
    this.router.navigate(['/product-add']);
  }  
}
