import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  alert:boolean = false;

  constructor(private productService:ProductService, private router: Router) { }

product = new FormGroup({
name: new FormControl(null,[Validators.required]),
price: new FormControl(null,[Validators.required])
})

  ngOnInit(): void {
  }

  redirectListing(){
    this.router.navigate(["/product-listing"]);
  }

  dataEnter(){
    console.log(this.product.value);
    this.productService.postData(this.product.value).subscribe((data)=>{
      console.log(data);
      this.alert = true;
    })
    this.product.reset({})
  }

}
