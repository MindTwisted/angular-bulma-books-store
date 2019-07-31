import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthorService } from '@app/core/services/author.service';
import { GenreService } from '@app/core/services/genre.service';
import { SearchResultInterface } from '@app/shared/components/autocomplete-input/search-result.interface';
import { AuthorModel } from '@app/shared/models/author.model';
import { GenreModel } from '@app/shared/models/genre.model';

const initialFilters = {
  search: '',
  authors: '',
  genres: ''
};

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.scss']
})
export class ShopFilterComponent implements OnInit {

  @Output() public applyFilter = new EventEmitter();
  @ViewChild('authorsFilter', { static: false }) public authorsFilter;
  @ViewChild('genresFilter', { static: false }) public genresFilter;

  public filters = { ...initialFilters };
  public isActive = false;
  public isFiltersApplied = false;
  public searchAuthors: SearchResultInterface[] = [];
  public searchGenres: SearchResultInterface[] = [];

  get isFiltersSet(): boolean {
    return Boolean(this.filters.search || this.filters.authors || this.filters.genres);
  }

  constructor(private authorService: AuthorService, private genreService: GenreService) {
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
    this.genresFilter.searchValue = '';
    this.genresFilter.selectedResults = [];
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

  public handleGenreSearch(value: string): void {
    this.genreService.fetch({ search: value })
      .subscribe((genres: GenreModel[]) => {
        this.searchGenres = genres.map(genre => {
          return {
            key: genre._id,
            value: genre.name
          };
        });
      });
  }

  public handleGenreSelect(select: SearchResultInterface[]): void {
    this.filters.genres = select.reduce((previousValue: any, currentValue: SearchResultInterface, index: number) => {
      if (index === 0) {
        return currentValue.key;
      }

      return previousValue + ',' + currentValue.key;
    }, '');
  }

}
