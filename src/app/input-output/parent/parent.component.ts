import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  food = 0;
  thankYouText = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendToChild(){
    this.food++;
  }

  sayThanks(event){
    this.thankYouText = event;
  }
}
