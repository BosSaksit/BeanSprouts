import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debtreduction-list',
  templateUrl: './debtreduction-list.page.html',
  styleUrls: ['./debtreduction-list.page.scss'],
})
export class DebtreductionListPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoDebReducAdd(){
    this.router.navigate(['/debtreduction-add']);
  }

}
