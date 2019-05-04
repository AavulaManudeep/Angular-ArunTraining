import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductsService]
})
export class ProductsComponent implements OnInit {

  name : String = "Products of Manu";

  Showimage : boolean =true;

  products :any = [];

  constructor(private _productService : ProductsService) 
  {
    
   }

  ngOnInit() {
    this._productService.getproducts().subscribe((data) =>
    {
      this.products=data;
    }
    );
  }

  toggleimage()
  {
    this.Showimage = !this.Showimage;
  }

}
