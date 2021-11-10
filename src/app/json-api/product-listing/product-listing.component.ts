import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  productData:any = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
 this.productService.getListing().subscribe((data)=> {
    console.log(data);
    this.productData = data;
    
 })  

}

  deleteProduct(product){
    // console.log(product);
    this.productData.splice(product-1, 1)
    this.productService.deleteData(product).subscribe((data)=> {
      console.log(data);
      
    })
  }

}
