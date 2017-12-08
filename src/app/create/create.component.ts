import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product = new Product();
  
  constructor(private _ps: ProductService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(form){
    this._ps.addProduct(this.product);
    this.product = new Product();
    this._router.navigate(['products'])
  }

}
