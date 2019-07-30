import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthorService } from '@app/core/services/author.service';
import { SearchResultInterface } from '@app/shared/components/autocomplete-input/search-result.interface';
import { AuthorModel } from '@app/shared/models/author.model';

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

  get isFiltersSet(): boolean {
    return Boolean(this.filters.search || this.filters.authors);
  }

  constructor(private authorService: AuthorService) {
  }

  public ngOnInit(): void {
  }

  public submitFilters(): void {
    this.isFiltersApplied = true;
    this.applyFilter.emit();
  }

  public resetFilters(): void {
    this.isFiltersApplied = false;
    this.filters = { ...initialFilters };
    this.authorsFilter.searchValue = '';
    this.authorsFilter.selectedResults = [];
    this.applyFilter.emit();
  }

  public handleAuthorSearch(value: string): void {
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

  public handleAuthorSelect(select: SearchResultInterface[]): void {
    this.filters.authors = select.reduce((previousValue: any, currentValue: SearchResultInterface, index: number) => {
      if (index === 0) {
        return currentValue.key;
      }

      return previousValue + ',' + currentValue.key;
    }, '');
  }

}
