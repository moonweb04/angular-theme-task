import { Component, Input, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() foodCount;

  @Output() thanks: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sayThank(event){
    this.thanks.emit('Thank you');
  }

}
