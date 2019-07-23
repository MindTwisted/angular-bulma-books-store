import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthorService } from '../../../../core/services/author.service';
import { SearchResultInterface } from '../../../../shared/components/autocomplete-input/search-result.interface';
import AuthorModel from '../../../../shared/models/author.model';

const initialFilters = {
  search: '',
  authors: ''
};

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.scss']
})
export class ShopFilterComponent implements OnInit {

  @Output() public applyFilter = new EventEmitter();
  @ViewChild('authorsFilter', { static: false }) public authorsFilter;

  public filters = { ...initialFilters };
  public isActive = false;
  public isFiltersApplied = false;
  public searchAuthors: SearchResultInterface[] = [];

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
    this.applyFilter.emit();
  }

  public resetFilters() {
    this.isFiltersApplied = false;
    this.filters = { ...initialFilters };
    this.authorsFilter.searchValue = '';
    this.authorsFilter.selectedResults = [];
    this.applyFilter.emit();
  }

  public handleClearSearch() {
    this.filters.search = '';
  }

  public handleAuthorSearch(value: string) {
    this.authorService.fetch({ search: value })
      .subscribe((authors: AuthorModel[]) => {
        this.searchAuthors = authors.map(author => {
          return {
            key: author._id,
            value: author.name
          };
        });
      });
  }

  public handleAuthorSelect(select: SearchResultInterface[]) {
    this.filters.authors = select.reduce((previousValue: any, currentValue: SearchResultInterface, index: number) => {
      if (index === 0) {
        return currentValue.key;
      }

      return previousValue + ',' + currentValue.key;
    }, '');
  }

}
