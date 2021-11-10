import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  product = []

  addProduct(productname){
    this.product.push({
      name:productname.value
    })

    if(this.product.length>4){
      alert("redirect");
      this.router.navigate(['/redirect-component'])
    }
  }

  removeProduct(data){
    this.product.splice(data, 1)
  }

  

}
