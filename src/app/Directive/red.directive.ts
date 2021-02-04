import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(element: ElementRef, private renderer: Renderer2) {
    element.nativeElement.style.background = 'yellow';
    renderer.setStyle(element.nativeElement, 'background', 'red');
  }

}
