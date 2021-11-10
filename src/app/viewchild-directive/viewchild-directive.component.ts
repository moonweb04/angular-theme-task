import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildDirective } from './directive/viewchild.directive';

@Component({
  selector: 'app-viewchild-directive',
  templateUrl: './viewchild-directive.component.html',
  styleUrls: ['./viewchild-directive.component.css']
})
export class ViewchildDirectiveComponent implements OnInit {

  @ViewChild(ViewchildDirective) myDir:ViewchildDirective
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color){
    this.myDir.changeBg(color)
  }

}
