import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products = [];
  
  constructor(private _ps: ProductService) { }

  ngOnInit() {
    this._ps.products.subscribe(products => this.products = products);
  }

  delete(index){
    this._ps.deleteProduct(index);
  }

  edit(index){
    this._ps.editProduct(index);
  }

}
