import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {


  constructor(private productService:ProductService, private activeRouter: ActivatedRoute) { }

  productUpdate = new FormGroup({
  name: new FormControl(null,[Validators.required]),
  price: new FormControl(null,[Validators.required])
})

  ngOnInit(): void {
    console.log(this.activeRouter.snapshot.params.id);
    this.productService.getCurrentData(this.activeRouter.snapshot.params.id).subscribe((data) => {
      console.log(data);
      this.productUpdate = new FormGroup({
        name: new FormControl(data['name']),
        price: new FormControl(data['price'])
      })
    })
  }

  updateData(){
   console.log("product",this.productUpdate.value);
   this.productService.updateData(this.activeRouter.snapshot.params.id, this.productUpdate.value).subscribe((data) => {
     console.log(data);
     
     
   })
  }


}
