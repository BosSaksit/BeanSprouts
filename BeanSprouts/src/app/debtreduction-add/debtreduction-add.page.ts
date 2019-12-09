import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debtreduction-add',
  templateUrl: './debtreduction-add.page.html',
  styleUrls: ['./debtreduction-add.page.scss'],
})
export class DebtreductionAddPage implements OnInit {

  countRow: number;
  arr: any[] = [];

  constructor() { 
    this.countRow = null;
  }

  ngOnInit() {
  }

  createRow() {
    console.log(this.countRow);
    this.arr = new Array(this.countRow);
  }

}
