import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SearchResult } from './search-result';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss']
})
export class AutocompleteInputComponent implements OnInit {

  @Input() public componentClass: string;
  @Input() public componentId: string;
  @Input() public searchResults: SearchResult[];
  @Output() public search = new EventEmitter();
  @Output() public selectResults = new EventEmitter();

  public searchValue = '';
  public searchTimer: any = null;
  public isResultsActive = false;
  public selectedResults: SearchResult[] = [];

  @HostListener('document:click', ['$event'])
  private clickOut(event) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      return;
    }

    this.isResultsActive = false;
  }

  constructor(private elementRef: ElementRef) {
  }

  public ngOnInit() {
  }

  public handleSearch() {
    if (this.searchTimer) {
      return;
    }

    this.searchTimer = setTimeout(() => {
      this.search.emit(this.searchValue);
      this.searchTimer = null;
      this.isResultsActive = true;
    }, 500);
  }

  public handleClearSearch() {
    this.searchValue = '';
  }

  public selectResult(result: SearchResult) {
    const resultId = this.selectedResults.findIndex((selectedResult: SearchResult) => {
      return selectedResult.key === result.key;
    });

    if (resultId !== -1) {
      return;
    }

    this.selectedResults.push(result);
    this.selectResults.emit(this.selectedResults);
  }

  public unselectResult(result: SearchResult) {
    this.selectedResults = this.selectedResults.filter((selectedResult: SearchResult) => {
      return selectedResult.key !== result.key;
    });

    this.selectResults.emit(this.selectedResults);
  }

  public isResultSelected(result: SearchResult) {
    const index = this.selectedResults.findIndex((selectedResult: SearchResult) => {
      return result.key === selectedResult.key;
    });

    return index !== -1;
  }

}
