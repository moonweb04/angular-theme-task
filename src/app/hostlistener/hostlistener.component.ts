import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.css']
})
export class HostlistenerComponent implements OnInit {

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }
  clicked: string;

@HostListener('document:click', ['$event'])

DocumentClick(event:Event){
  if(this.elem.nativeElement.contains(event.target)){
    this.clicked = "inside"
  }
  else{
    this.clicked = "outside"
  }
}
  
}
