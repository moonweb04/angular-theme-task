import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-eg',
  templateUrl: './child-eg.component.html',
  styleUrls: ['./child-eg.component.css']
})
export class ChildEgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input() secColor;
@Input() text;
@Output() inputEvent = new EventEmitter()

count:number = 0;
addPerson(data){
  if(data.value.length>0){
    this.count = this.count+1;
    this.inputEvent.emit(data.value);
  }
  
}
}
