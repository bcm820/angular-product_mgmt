import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  product;
  index;
  
  constructor(private _ps: ProductService, private _router: Router) { }

  ngOnInit() {
    this._ps.product.subscribe(product => this.product = product);
    this._ps.index.subscribe(index => this.index = index);
  }

  delete(index){
    this._ps.deleteProduct(index);
    this._router.navigate(['products']);
  }

  onSubmit(){
    this._ps.updateProduct(this.index, this.product);
    this._router.navigate(['products'])
  }

}
