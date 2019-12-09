import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.page.html',
  styleUrls: ['./customer-edit.page.scss'],
})
export class CustomerEditPage implements OnInit {

  check :any;
  constructor(public activate:ActivatedRoute) {
   this.check = this.activate.snapshot.paramMap.get('check1') ;
   }

  ngOnInit() {
  }

}
