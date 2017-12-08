import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProductService {

  products = new BehaviorSubject([]);
  product = new BehaviorSubject({});
  index = new BehaviorSubject(0);
  
  constructor(private _router: Router) { }

  addProduct(product) {
    let prods = this.products.getValue();
    prods.push(product);
    this.products.next(prods);
  }

  deleteProduct(index) {
    let prods = this.products.getValue();
    prods.splice(index, 1);
    this.products.next(prods);
  }

  editProduct(index) { // to load prod for edits
    let prods = this.products.getValue();
    this.product.next(prods[index]);
    this.index.next(index);
    this._router.navigate(['products','edit',index]);
  }

  updateProduct(index, product) { // to 'edit' prod
    let prods = this.products.getValue();
    prods.splice(index, 1, product);
    this.products.next(prods);
  }

}