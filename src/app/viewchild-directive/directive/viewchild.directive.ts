import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appViewchild]'
})
export class ViewchildDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
   }

changeBg(color:string){
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor',color);
}
}
