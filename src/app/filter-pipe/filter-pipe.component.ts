import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productSearch:string = ""
  product = [
    {
      id: 1,
      productName: "Tv",
      price: 10000
    },
    {
      id: 2,
      productName: "Table",
      price: 800
    },
    {
      id: 3,
      productName: "Chair",
      price: 600
    },
    {
      id: 4,
      productName: "Book",
      price: 20
    }
  ]
  
}
