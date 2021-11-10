import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-switch',
  templateUrl: './template-switch.component.html',
  styleUrls: ['./template-switch.component.css']
})
export class TemplateSwitchComponent implements OnInit {
myMov: any
 myDir: any 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  templates = [];
  constructor() {

    this.templates = [
        {'name' : 'template1'},
        {'name' : 'template2'},
        {'name' : 'template3'}
    ]
  }
}
