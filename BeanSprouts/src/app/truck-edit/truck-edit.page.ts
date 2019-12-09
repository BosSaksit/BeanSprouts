import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-truck-edit',
  templateUrl: './truck-edit.page.html',
  styleUrls: ['./truck-edit.page.scss'],
})
export class TruckEditPage implements OnInit {

  check :any;
  constructor(public activate:ActivatedRoute) {
    this.check = this.activate.snapshot.paramMap.get('check1');
   }

  ngOnInit() {
  }

}
