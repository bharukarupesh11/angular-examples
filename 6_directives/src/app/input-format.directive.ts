import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format;

  // ElementRef is a service defined in angular that gives us access to HTML DOM object
  constructor(private el: ElementRef) { }
  
  // HostListener decorator is used to subscribe to the event raised from the DOM object
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if(this.format === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
