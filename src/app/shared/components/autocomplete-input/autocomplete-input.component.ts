import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchResultInterface } from '@app/shared/components/autocomplete-input/search-result.interface';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss']
})
export class AutocompleteInputComponent implements OnInit {

  @Input() public componentId: string;
  @Input() public componentLabel = '';
  @Input() public searchResults: SearchResultInterface[];
  @Output() public search = new EventEmitter<string>();
  @Output() public selectResults = new EventEmitter<SearchResultInterface[]>();

  public searchValue = '';
  public searchTimer: any = null;
  public isResultsActive = false;
  public selectedResults: SearchResultInterface[] = [];

  constructor() {
  }

  public ngOnInit(): void {
  }

  public handleSearch(): void {
    if (this.searchTimer) {
      return;
    }

    this.searchTimer = setTimeout(() => {
      this.search.emit(this.searchValue);
      this.searchTimer = null;
      this.isResultsActive = true;
    }, 500);
  }

  public handleClearSearch(): void {
    this.searchValue = '';
  }

  public selectResult(result: SearchResultInterface): void {
    const resultId = this.selectedResults.findIndex((selectedResult: SearchResultInterface) => {
      return selectedResult.key === result.key;
    });

    if (resultId !== -1) {
      return;
    }

    this.selectedResults.push(result);
    this.selectResults.emit(this.selectedResults);
  }

  public unselectResult(result: SearchResultInterface): void {
    this.selectedResults = this.selectedResults.filter((selectedResult: SearchResultInterface) => {
      return selectedResult.key !== result.key;
    });

    this.selectResults.emit(this.selectedResults);
  }

  public isResultSelected(result: SearchResultInterface): boolean {
    const index = this.selectedResults.findIndex((selectedResult: SearchResultInterface) => {
      return result.key === selectedResult.key;
    });

    return index !== -1;
  }

}
