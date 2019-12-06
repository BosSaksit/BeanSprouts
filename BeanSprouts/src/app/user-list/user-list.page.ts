import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoAddUser(){
    this.router.navigate(['/user-add']);
  }

}
