import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

const initialFilters = {
  search: ''
};

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.scss']
})
export class ShopFilterComponent implements OnInit {

  @Output() public submitFilter = new EventEmitter();

  public isActive = false;
  public isFiltersApplied = false;
  public filters = { ...initialFilters };

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
    this.submitFilter.emit(this.filters);
  }

  public resetFilters() {
    this.filters = { ...initialFilters };
    this.isFiltersApplied = false;
    this.submitFilter.emit(this.filters);
  }

}
