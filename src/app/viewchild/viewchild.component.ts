import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  username = "Abc"; 
  @ViewChild('sec') sec:ElementRef;
  @ViewChild(Comp1Component) child:Comp1Component

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    // console.log(this.sec);
    // this.sec.nativeElement.style.backgroundColor='orange';
    // this.sec.nativeElement.classList="custom-class";
    // this.sec.nativeElement.innerHTML="This is come from InnerHtml";
    console.log(this.child);
    
  }

  changeChildProperty(){
    this.child.username = 'Changed Name';
  }

  callChildMethod(){
    this.child.clickHere();
  }
}
