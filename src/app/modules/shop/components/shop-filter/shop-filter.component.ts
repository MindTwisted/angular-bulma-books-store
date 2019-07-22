import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthorService } from '../../../../core/services/author.service';
import { SearchResult } from '../../../../shared/components/autocomplete-input/search-result';
import Author from '../../../../shared/models/Author';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.scss']
})
export class ShopFilterComponent implements OnInit {

  @Input() public filters: any;
  @Output() public filtersChange = new EventEmitter();
  @Output() public submitFilter = new EventEmitter();
  @Output() public resetFilter = new EventEmitter();
  @ViewChild('authorsFilter', { static: false }) public authorsFilter;

  public isActive = false;
  public isFiltersApplied = false;
  public searchAuthors: SearchResult[] = [];

  get isFiltersSet() {
    return this.filters.search || this.filters.authors;
  }

  constructor(private elementRef: ElementRef, private authorService: AuthorService) {
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
    this.authorsFilter.searchValue = '';
    this.authorsFilter.selectedResults = [];
  }

  public handleSetSearch(event) {
    this.filtersChange.emit({ ...this.filters, search: event.target.value });
  }

  public handleClearSearch() {
    this.filtersChange.emit({ ...this.filters, search: '' });
  }

  public handleAuthorSearch(value: string) {
    this.authorService.fetch({ search: value })
      .subscribe((authors: Author[]) => {
        this.searchAuthors = authors.map(author => {
          return {
            key: author._id,
            value: author.name
          };
        });
      });
  }

  public handleAuthorSelect(select: SearchResult[]) {
    const authors = select.reduce((previousValue: any, currentValue: SearchResult, index: number) => {
      if (index === 0) {
        return currentValue.key;
      }

      return previousValue + ',' + currentValue.key;
    }, '');

    this.filtersChange.emit({ ...this.filters, authors });
  }

}
