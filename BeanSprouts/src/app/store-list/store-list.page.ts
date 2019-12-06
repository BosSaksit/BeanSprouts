import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.page.html',
  styleUrls: ['./store-list.page.scss'],
})
export class StoreListPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }


  gopageStoreEdit(){

    this.route.navigate(['/store-edit'])
  }
  gopageStoreAdd(){
    this.route.navigate(['/store-add'])
  }
}
