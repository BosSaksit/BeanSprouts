import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

  check :any;
  constructor(public activate:ActivatedRoute) { 
    this.check = this.activate.snapshot.paramMap.get('check1');
  }

  ngOnInit() {
  }

}
