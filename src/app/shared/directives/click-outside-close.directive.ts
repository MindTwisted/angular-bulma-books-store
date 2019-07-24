import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appClickOutsideClose]'
})
export class ClickOutsideCloseDirective implements OnInit, OnChanges {

  @Input() private activePropName: string;

  constructor(private elementRef: ElementRef, private viewContainerRef: ViewContainerRef) {
  }

  @HostListener('document:click', ['$event'])
  private clickOut(event): void {
    if (this.elementRef.nativeElement.contains(event.target)) {
      return;
    }

    // tslint:disable-next-line:no-string-literal
    const hostComponent = this.viewContainerRef['_data'].componentView.component;

    hostComponent[this.activePropName] = false;
  }

  public ngOnInit(): void {
    this.checkRequiredProp('activePropName');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.checkRequiredProp('activePropName');
  }

  private checkRequiredProp(prop): void {
    if (!this[prop]) {
      throw new Error(`Property ${prop} is missed in ${this.constructor.name}`);
    }
  }

}
