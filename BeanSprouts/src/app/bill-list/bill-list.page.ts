import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.page.html',
  styleUrls: ['./bill-list.page.scss'],
})
export class BillListPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoPayment(){
    this.router.navigate(['/bill-add']);
  }

  gotoTableBill(){
    this.router.navigate(['/bill-table']);
  }

  gotoEditBill(){
    this.router.navigate(['/bill-edit-data']);
  }

}
