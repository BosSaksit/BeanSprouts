import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  constructor(public router:Router, public callapi:CallapiService) { 
    this.callapi.checkStateMenuBar = "1";
  }

  ngOnInit() {
  }

  gotoAddUser(){
    this.router.navigate(['/user-add']);
  }

}
