import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputWarning]'
})
export class InputWarningDirective {

  constructor(
    private el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngAfterViewInit() {

    const messageDom = this._renderer.selectRootElement('#msg');

    this._renderer.listen(this.el.nativeElement, 'input', () => {

      messageDom.innerHTML = '';
      const value = this.el.nativeElement.value;

      if(value === 'Hey') {
        messageDom.innerHTML = '<h2> <i class="far fa-smile text-danger fa-2x"></i> Hey</h2>';
        return false;
      }

      if(value === 'Find'){
        messageDom.innerHTML = '<h2> <i class="fas fa-search text-danger fa-2x"></i> Hey</h2>';
        return false;
      }

      if (!value.length) {
        return false;
      }

      if (value.length >= 5) {
        messageDom.innerHTML = '<i class="fa fa-times-circle text-danger p-1" aria-hidden="true"></i> Maximum characters length is 5';
        return false;
      }
      messageDom.innerHTML = '<i class="fa fa-check-circle text-success p-1" aria-hidden="true"></i> Correct';
    });
  }

}
