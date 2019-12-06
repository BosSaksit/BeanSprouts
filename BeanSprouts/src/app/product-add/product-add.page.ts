import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  submitRequested: boolean = false;

  dataProduct:FormGroup
  constructor(public formbuider:FormBuilder) { 
    this.dataProduct = this.formbuider.group({
      'nameProduct':[null,Validators.required],
      'idProduct':[null,Validators.required],
      'priceProduct':[null,Validators.required],
    });
  }

  ngOnInit() {
  }

  get f() { return this.dataProduct.controls; }

  public isValid(name: string): boolean {
    var ctrl = this.dataProduct.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  AddProduct(){
    this.submitRequested = true;
    console.log(this.dataProduct.value);
    
  }

}
