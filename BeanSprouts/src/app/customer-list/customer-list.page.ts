import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {

  check :any;

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoAddCustomer(){
    this.router.navigate(['/customer-add']);
  }

  gotoDetailCustomer(){
    this.check = 1;
    this.router.navigate(['/customer-edit',{check1:this.check}]);
  }

  gotoEditCustomer(){
    this.check = 2;
    this.router.navigate(['/customer-edit',{check1:this.check}]);

  }

}
