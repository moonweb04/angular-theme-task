import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit, AfterViewInit {
  @ViewChild('sec') sec:ElementRef;
  @ViewChild('sec2') sec2:ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.sec.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.sec2.nativeElement, 'text-align', 'center');
    this.renderer.setStyle(this.sec2.nativeElement, 'color', 'grey');
  }


}
