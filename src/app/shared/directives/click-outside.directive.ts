import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output() public clickedOutside = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  private clickOut(event): void {
    if (this.elementRef.nativeElement.contains(event.target)) {
      return;
    }

    this.clickedOutside.emit(null);
  }

}
