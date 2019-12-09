import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.page.html',
  styleUrls: ['./truck-list.page.scss'],
})
export class TruckListPage implements OnInit {

  check :any;

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoAddTruck(){
    this.router.navigate(['/truck-add']);
  }

  gotoDetailTruck(){
    this.check = 1;
    this.router.navigate(['/truck-edit',{check1:this.check}]);
  }

  gotoEditTruck(){
    this.check = 2;
    this.router.navigate(['/truck-edit',{check1:this.check}]);
    
  }

}
