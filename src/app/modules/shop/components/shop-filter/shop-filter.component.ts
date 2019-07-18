import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.scss']
})
export class ShopFilterComponent implements OnInit {

  @Input() public filters: any;
  @Output() public submitFilter = new EventEmitter();
  @Output() public resetFilter = new EventEmitter();

  public isActive = false;
  public isFiltersApplied = false;

  get isFiltersSet() {
    return this.filters.search;
  }

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  private clickOut(event) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      return;
    }

    this.isActive = false;
  }

  public ngOnInit() {
  }

  public toggleMenu() {
    this.isActive = !this.isActive;
  }

  public submitFilters() {
    this.isFiltersApplied = true;
    this.submitFilter.emit();
  }

  public resetFilters() {
    this.isFiltersApplied = false;
    this.resetFilter.emit();
  }

}
